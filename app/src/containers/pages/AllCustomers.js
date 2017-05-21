/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import AllCustomers from 'src/components/pages/AllCustomers';

/**
 * Code
 */
const mapStateToProps = state => ({
  allCustomersId: state.allCustomers.allId,
});
const mapDispatchToProps = null;

/**
 * Component
 */
const AllCustomersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllCustomers);

/**
 * Export default
 */
export default AllCustomersContainer;
