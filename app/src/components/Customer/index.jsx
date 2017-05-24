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
/* eslint-disable camelcase */

const Customer = ({ id, profile }) => {
  if (profile) {
    const {
      first_name,
      last_name,
      address,
      post_code,
      city,
      phone,
    } = profile;
    return (
      <div className="customer">
        <div className="customer-name">
          {`${first_name} ${last_name}`}
        </div>
        <div className="customer-phone">
          {phone}
        </div>
        <div className="customer-address">
          <div className="customer-address-street">
            {address}
          </div>
          <div className="customer-address-city">
            {`${post_code} - ${city}`}
          </div>
        </div>
        <div className="customer-id">
          {id}
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
