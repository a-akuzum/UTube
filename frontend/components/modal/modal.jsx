import React from 'react'
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SignupFormContainer from '../session/signup_form_container'
import LoginFormContainer from '../session/login_form_container'
import LogoutFormContainer from '../session/logout_form_container'

const Modal = ({ modal, closeModal }) => {
    if (!modal) return null
    let component
    let modalClass
    let modalChildClass

    switch (modal) {
        case 'login':
            component = <LoginFormContainer />
            modalClass = 'modal-background1'
            modalChildClass = 'modal-child1'
            break;
        case 'signup':
            component = <SignupFormContainer />
            break;
        case 'logout':
            component = <LogoutFormContainer />
            modalClass = 'modal-background2'
            modalChildClass = 'modal-child2'
        break;
        default:
            return null;
    }

      return (
        <div className={modalClass} onClick={closeModal}>
          <div className={modalChildClass} onClick={e => e.stopPropagation()}>
            { component }
          </div>
        </div>
      )
    }
    
    const mapStateToProps = state => {
      return {
        modal: state.ui.modal
      };
    };
    
    const mapDispatchToProps = dispatch => {
      return {
        closeModal: () => dispatch(closeModal())
      };
    };
    
    export default connect(mapStateToProps, mapDispatchToProps)(Modal);