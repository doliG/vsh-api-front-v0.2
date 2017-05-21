/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import App from 'src/components/App';

/**
 * Code
 */
const mapStateToProps = state => ({
  isAppReady: state.isAppReady,
});
const mapDispatchToProps = null;

/**
 * Component
 */
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

const RouterAppContainer = withRouter(AppContainer);

/**
 * Export default
 */
export default RouterAppContainer;
