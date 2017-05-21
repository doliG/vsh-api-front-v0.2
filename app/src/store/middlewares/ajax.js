/*
 * Npm import
 */
import { get } from 'axios';

/*
 * Local import
 */
import { normalizeCustomers } from './normalizer';

/**
 * Types
 */
const CUSTOMERS_GET = 'CUSTOMERS_GET_FROM_API';

/* eslint-disable no-console */

/*
 * Code
 */
const ajaxMiddleware = store => next => (action) => {
  switch (action.type) {
    case CUSTOMERS_GET: {
      console.log(CUSTOMERS_GET);
      get('http://vshapi.vaslyn.epi.codes/customers')
        .then(({ data }) => {
          store.dispatch(normalizeCustomers(data));
        },
      );
      break;
    }

    default:
  }

  next(action);
};


/**
 * Actions creators
 */
export const getCustomersFromApi = () => ({
  type: CUSTOMERS_GET,
});


/**
 * Export default
 */
export default ajaxMiddleware;
