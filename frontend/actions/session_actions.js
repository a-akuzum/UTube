import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_USER = 'RECEIVE_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS'

const receiveCurrentUser = user => ({
    type: RECEIVE_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_USER
})

const receieveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS,
    errors
})

export const login = currentUser => dispatch => 
    ApiUtil.login(currentUser)
    .then(user => dispatch(receiveCurrentUser(user)))

export const signup = newUser => dispatch => 
    ApiUtil.signup(newUser)
    .then(user => dispatch(receiveCurrentUser(user)))

export const logout = () => dispatch => 
    ApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))