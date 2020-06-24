import { Action } from 'redux';

export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR';
export const REMOVE_SESSION_ERRORS = 'CLEAR_SESSION_ERROR';

const receieveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON
})

const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS,
    errors
})