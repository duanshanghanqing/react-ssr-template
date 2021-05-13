import express from 'express';
// import proxy from 'express-http-proxy';
import Root from './root';

const app = express();
app.use(express.static('public'));
// The core JS path loaded by browser
app.use('/client', express.static('client'));
// Static resource path
app.use('/status', express.static('server/status'));

// Proxy browser interface request
// app.use('/api', proxy('http://47.95.113.63', {
//   proxyReqPathResolver(req) {
//     return `/ssr/api${req.url}`;
//   },
// }));

app.get('*', (req, res) => {
  Root(req, res);
});

const root = (typeof self === 'object' && self.self === self && self) || (typeof global === 'object' && global.global === global && global) || this;
// Read environment variables
// console.log(root.process.env.STAGE_ENV, root.process.env.PORT);

const server = app.listen(root.process.env.PORT || '9020', () => {
  const host = server.address().address || 'localhost';
  const port = server.address().port;
  console.log('http://%s:%s', host, port);
});
