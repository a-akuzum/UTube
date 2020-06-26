import { connect } from 'react-redux';
import Greeting from './greeting';
import { logOut } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  let currentUserId = state.session.id
  return {
    currentUser: state.entities.users[currentUserId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logOut())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps)(Greeting)
);