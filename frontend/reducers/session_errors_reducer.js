import { RECEIVE_USER } from '../actions/session_actions'
import { 
    RECEIVE_SESSION_ERROR, 
    REMOVE_SESSION_ERRORS 
    } from '../actions/error_actions'

const sessionErrorsReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_USER:
            return []
        case REMOVE_SESSION_ERRORS:
            return []
        case RECEIVE_SESSION_ERROR:
            return action.errors
        default:
            return state
    }
}

export default sessionErrorsReducer
