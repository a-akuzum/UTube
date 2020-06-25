import { RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions';

const sessionReducer = (state={}, action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_USER:
            return Object.assign({}, state, { currentUserId: action.user.id })
        case LOGOUT_USER:
            const nextState = Object.assign({}, state);
            nextState.currentUserId = null;
            return nextState;
        default:
            return state;
    }
}

export default sessionReducer