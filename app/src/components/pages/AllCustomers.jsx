/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


/**
 * Local import
 */
import Customer from 'src/containers/Customer';

/**
 * Component (pure function)
 */
const AllCustomers = ({ allCustomersId }) => (
  <div id="all-customers">
    <div className="title">
      <h1>Tous vos clients</h1>
    </div>

    <div className="content">
      {allCustomersId.map(customerId => (
        <Link to={`customers/${customerId}`} key={customerId} >
          <Customer key={customerId} id={customerId} />
        </Link>
      ))}
    </div>
  </div>
);

AllCustomers.propTypes = {
  allCustomersId: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

/**
 * Export default
 */
export default AllCustomers;
