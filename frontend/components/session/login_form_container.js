import { connect } from 'react-redux';
import { logIn} from '../../actions/session_actions';
import { receiveErrors, clearErrors } from '../../actions/error_actions'
import LoginForm from './login_form';

const mapStateToPorops = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'login',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(logIn(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToPorops,
  mapDispatchToProps)(LoginForm);