/**
 * Fake datas
 */

/*
 * Types
 */
const CUSTOMERS_SET = 'CUSTOMERS_SET';

/*
 * initialState
 */
const initialState = {
  isAppReady: false,
  allCustomers: {},
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CUSTOMERS_SET: {
      console.log('Putting api normalized customers into state.')
      return {
        ...state,
        allCustomers: {
          ...action.customers,
        },
        isAppReady: true,
      };
    }

    default:
      return state;
  }
};


/*
 * Action creators
 */
export const setCustomers = customers => ({
  type: CUSTOMERS_SET,
  customers,
});

/**
 * Selectors
 */
export const getCustomerFromId = (state, id) => state.allCustomers.byId[id];
