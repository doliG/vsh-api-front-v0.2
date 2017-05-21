/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

/**
 * Local import
 */

// Components
import Navbar from 'src/components/Navbar';
import OneCustomer from 'src/components/pages/OneCustomer';

// Containers
import HomePage from 'src/components/pages/HomePage';
import AllCustomers from 'src/containers/pages/AllCustomers';

/**
 * Code
 */
const App = ({ isAppReady }) => {
  if (!isAppReady) {
    return <p>App is loading</p>;
  }
  return (
    <div id="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/customers" component={AllCustomers} />
        <Route exact path="/customers/new" component={() => <p>Add a new customer to database</p>} />
        <Route exact path="/customers/:id" component={OneCustomer} />
        <Route exact path="/customers/:id/neworder" component={() => <p>Add a new order to database (ofc each order link to a customer by customer's id)</p>} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  isAppReady: PropTypes.bool.isRequired,
};

/**
 * Export default
 */
export default App;
