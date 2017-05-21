/*
 * Npm import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

/*
 * Local import
 */
import App from 'src/containers/App';
import store from 'src/store';
import { getCustomersFromApi } from 'src/store/middlewares/ajax';


/*
 * Code
 */
document.addEventListener('DOMContentLoaded', () => {
  const provider = (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  // Rendering app
  render(provider, document.getElementById('root'));
  // Getting base data and putting it in state
  store.dispatch(getCustomersFromApi());
});
