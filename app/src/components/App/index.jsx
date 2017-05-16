/**
 * Npm import
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * Local import
 */

// Components
import Navbar from 'src/components/Navbar';
import HomePage from 'src/components/pages/HomePage';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <Navbar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/customers" component={() => <p>All customers</p>} />
      <Route exact path="/customers/new" component={() => <p>Add a new customer to database</p>} />
      <Route exact path="/customers/:id" component={() => <p>Display one specific customer, with all his orders and maybe later some stats (last order, total amount, etc...)</p>} />
      <Route exact path="/customers/:id/neworder" component={() => <p>Add a new order to database (ofc each order link to a customer by customer's id)</p>} />
    </Switch>
  </div>
);


/**
 * Export default
 */
export default App;
