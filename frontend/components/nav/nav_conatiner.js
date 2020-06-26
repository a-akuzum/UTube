import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/ui_action';
import Nav from './nav';

const mapStateToPorops = (state) => {
  return {
    modal: state.ui.modal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(
  mapStateToPorops, 
  mapDispatchToProps)(Nav);