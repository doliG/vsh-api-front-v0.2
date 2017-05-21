/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local imports
 */
import CustomerNotFound from 'src/components/errors/CustomerNotFound';


/**
 * Component (pure function)
 */
const Customer = ({ id, profile }) => {
  if (profile) {
    return (
      <div className="customer">
        Customer {id}
        <div className="customer-name">
          {profile.first_name}
          {profile.last_name}
        </div>
        <div className="customer-address">
          {profile.address}
          {profile.post_code}
          {profile.city}
        </div>
        <div className="customer-phone">
          {profile.phone}
        </div>
      </div>
    );
  }
  return <CustomerNotFound />;
};

Customer.propTypes = {
  id: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    address: PropTypes.string,
    post_code: PropTypes.string,
    phone: PropTypes.string,
  }),
};

Customer.defaultProps = {
  profile: undefined,
};


/**
 * Export default
 */
export default Customer;
