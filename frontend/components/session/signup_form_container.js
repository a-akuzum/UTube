import { connect } from 'react-redux';
import { signUp} from '../../actions/session_actions';
import { 
  receiveErrors,
  clearErrors } from '../../actions/error_actions'
import SignupForm from './signup_form';

const mapStateToPorops = (state) => {
  return {
    errors: state.errors.sessionErrors,
    formType: 'signup',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToPorops,
  mapDispatchToProps)(SignupForm);