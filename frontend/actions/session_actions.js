import * as ApiUtil from '../util/session_api_util';
import {  
    receieveSessionErrors, 
    removeSessionErrors
    } from './error_actions'


export const RECEIVE_USER = 'RECEIVE_USER'
export const LOGOUT_USER = 'LOGOUT_USER'


const receiveCurrentUser = user => ({
    type: RECEIVE_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_USER
})



export const login = currentUser => dispatch => 
    ApiUtil.login(currentUser)
    .then((user) => {
        dispatch(removeSessionErrors())
        dispatch(receiveCurrentUser(user))
    }, (errors) => {
        dispatch(receieveSessionErrors(errors))
    })

export const signup = newUser => dispatch => 
    ApiUtil.signup(newUser)
    .then((user) => {
        dispatch(removeSessionErrors())
        dispatch(receiveCurrentUser(user))
    },(errors) => {
        dispatch(receieveSessionErrors(errors))
    })

export const logout = () => dispatch => 
    ApiUtil.logout()
    .then(() => {
        dispatch(logoutCurrentUser())
    },(errors) => {
        dispatch(receieveSessionErrors(errors))
    })

