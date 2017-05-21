/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Local import
 */
import Customer from 'src/containers/Customer';

/**
 * Component (pure function)
 */
const OneCustomer = ({ match }) => (
  <div id="one-customers">
    <Customer id={match.params.id} />
  </div>
);

OneCustomer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

/**
 * Export default
 */
export default OneCustomer;
