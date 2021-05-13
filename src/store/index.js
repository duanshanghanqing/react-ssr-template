import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


// export default () => {
//     const store = createStore(reducers, compose(
//         applyMiddleware(thunk)
//     ));
//     return store;
// }

export const createServerStore = (req) => {
  console.log(req.path);
  const store = createStore(reducers, compose(
    applyMiddleware(thunk.withExtraArgument(
      // ...
      // Extended Middleware   export const getAction = () => (dispatch, getState, ...) => (Promise)
    )),
  ));
  return store;
};

export const createClientStore = () => {
  // The data returned by the server is used as the default data of the client.
  // The data of client is consistent with that of server
  // Realize data injection and dehydration
  const defaultStore = window._context.state;
  const store = createStore(reducers, defaultStore, compose(
    applyMiddleware(thunk.withExtraArgument(
      // ... Extended Middleware
    )),
  ));
  return store;
};
