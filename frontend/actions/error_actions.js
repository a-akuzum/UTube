export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS;'
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = (errors) => {
    return {
      type: RECEIVE_SESSION_ERRORS,
      errors: errors,
    };
};
  
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
    };
};