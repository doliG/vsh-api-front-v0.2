/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import { getCustomerFromId } from 'src/store/reducer';
import Customer from 'src/components/Customer';

/**
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  ...getCustomerFromId(state, ownProps.id),
});
const mapDispatchToProps = null;

/**
 * Component
 */
const CustomerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Customer);

/**
 * Export default
 */
export default CustomerContainer;
