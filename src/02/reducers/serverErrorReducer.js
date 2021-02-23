import { actionTypes } from '../actions';

const serverErrorReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.SERVER_ERROR:
      return true;
    case actionTypes.SERVER_ERROR_RESET:
      return false;
    default:
      return state;
  }
};

export default serverErrorReducer;
