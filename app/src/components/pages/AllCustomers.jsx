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
  <div id="AllCustomers">
    AllCustomers
    {allCustomersId.map(customerId => (
      <Link to={`customers/${customerId}`} key={customerId} >
        <Customer key={customerId} id={customerId} />
      </Link>
    ))}
  </div>
);

AllCustomers.propTypes = {
  allCustomersId: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

/**
 * Export default
 */
export default AllCustomers;
