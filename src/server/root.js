import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'; // matchPath： Only one layer route can be matched, not multi-level route
import { matchRoutes, renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
// import zhCN from 'antd/es/locale/zh_CN';
import { createServerStore } from '../store';
import routes from '../routes';

const isProd = process.env.ENV === 'production';

export default (req, res) => {
  const store = createServerStore(req);
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];
  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      const promise = new Promise((resolve) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      promises.push(promise);
    }
  });

  Promise.all(promises).then(() => {
    // The core technology of 404 page
    const context = {};

    const content = renderToString(
      <ConfigProvider locale={zh_CN}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            {renderRoutes(routes)}
          </StaticRouter>
        </Provider>
      </ConfigProvider>,
    );

    let css = '';
    if (isProd) {
      css = `<link href="/status/css/main.css?v=${new Date() * 1}" rel="stylesheet">`;
    }

    const html = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <title>react</title>
                            ${css}
                        </head>
                        <body>
                            <div id="root">${content}</div>
                            <script>
                                window._context = {
                                    state: ${JSON.stringify(store.getState())}
                                }
                            </script>
                            <script src="/client/index.js"></script>
                        </body>
                    </html>
                    `;
    console.log(context);
    if (context.action === 'REPLACE') { // 304 redirection
      res.redirect(301, context.url);
    } else if (context.NOT_FOUND) { // Visit the nonexistent page and return 404 status code
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
  });
};
