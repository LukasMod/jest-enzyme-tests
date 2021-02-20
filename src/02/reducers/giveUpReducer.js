import { actionTypes } from '../actions';

const gaveUpReducer = (state = false, action) => {
  switch (action.type) {
    case actionTypes.GIVE_UP:
      return true;
    case actionTypes.TRY_AGAIN:
      return false;
    default:
      return state;
  }
};

export default gaveUpReducer;
