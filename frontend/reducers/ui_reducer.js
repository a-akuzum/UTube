// import { OPEN_MODAL, CLOSE_MODAL } from '../actions/ui_action';
  
//   let defaultState = {
//     modal: false
//   }
  
//   const uiReducer = (oldState = defaultState, action) => {
//     Object.freeze(oldState);
//     let nextState = Object.assign({}, oldState);
  
//     switch (action.type) {
//       case OPEN_MODAL:
//         nextState.modal = true;
//         return nextState;
//       case CLOSE_MODAL:
//         nextState.modal = false;
//         return nextState;
//       default:
//         return oldState;
//     }
//   }
  
//   export default uiReducer;

import {combineReducers} from 'redux'
import modalReducer from './modal_reducer'

const uiReducer = combineReducers({
  modal: modalReducer
})

export default uiReducer