import * as APIUtil from '../util/session_api_util';
import { receiveErrors, clearErrors } from './error_actions'


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  }
};


export const signUp = (user) => {
  return (dispatch) => {
    return APIUtil.signUp(user).then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const logIn = (user) => {
  return (dispatch) => {
    return APIUtil.logIn(user).then( 
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const logOut = () => {
  return (dispatch) => {
    return APIUtil.logOut().then( 
      res => dispatch(logoutCurrentUser(res))
      // err => dispatch(receiveErrors(err.responseJSON))
    );
  };
};