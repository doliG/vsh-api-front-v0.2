/*
 * Npm import
 */


/*
 * Local import
 */
import { setCustomers } from 'src/store/reducer';

/**
 * Types
 */
const CUSTOMERS_NORMALIZE = 'CUSTOMERS_NORMALIZE_FROM_API';


/*
 * Code
 */
const normalizerMiddleware = store => next => (action) => {
  switch (action.type) {
    case CUSTOMERS_NORMALIZE: {
      const { customers } = action;
      const normalizedCustomers = { allId: [], byId: {} };

      customers.forEach((customer) => {
        normalizedCustomers.allId.push(customer._id);
        normalizedCustomers.byId[customer._id] = customer;
      });

      store.dispatch(setCustomers(normalizedCustomers));
      break;
    }

    default:
  }

  next(action);
};


/**
 * Actions creators
 */
export const normalizeCustomers = customers => ({
  type: CUSTOMERS_NORMALIZE,
  customers,
});


/**
 * Export default
 */
export default normalizerMiddleware;
