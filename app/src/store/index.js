/*
 * Npm import
 */
import { applyMiddleware, compose, createStore } from 'redux';


/*
 * Local import
 */
import reducer from './reducer';
import ajaxMiddleware from './middlewares/ajax';
import normalizerMiddleware from './middlewares/normalizer';


/*
 * Code
 */
// Redux DevTools extension
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}

// Middlewares
const middleware = applyMiddleware(ajaxMiddleware, normalizerMiddleware);
const middlewares = compose(middleware, ...devTools);

// Store
const store = createStore(reducer, middlewares);


/*
 * Export default
 */
export default store;
