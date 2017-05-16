/**
 * Npm import
 */
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

/**
 * Local import
 */

// Components
// import Navbar from 'src/components/Navbar';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/customers">All customers</Link></li>
      <li><Link to="/customers/3">One customer</Link></li>
      <li><Link to="/customers/new">Add customer</Link></li>
      <li><Link to="/customers/3/neworder">Add order</Link></li>
    </ul>

    <hr />
    <Switch>
      <Route exact path="/" component={() => <p>Home</p>} />
      <Route exact path="/customers" component={() => <p>All customers</p>} />
      <Route exact path="/customers/:id" component={() => <p>Display one specific customer, with all his orders and maybe later some stats (last order, total amount, etc...)</p>} />
      <Route exact path="/customers/new" component={() => <p>Add a new customer to database</p>} />
      <Route exact path="/customers/:id/neworder" component={() => <p>Add a new order to database (ofc each order link to a customer by customer's id)</p>} />
    </Switch>
  </div>
);


/**
 * Export default
 */
export default App;
