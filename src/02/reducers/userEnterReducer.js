import { actionTypes } from '../actions/';

/**
 * @function secretWordReducer
 * @param {array} state - State before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns {boolean} - New state (secret word payload from action).
 */

const userEnterReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.USER_ENTERING:
      return 'inProgress';
    case actionTypes.USER_ENTERED:
      return 'done';
    case actionTypes.RESET_USER_WORD:
      return null;
    default:
      return state;
  }
};

export default userEnterReducer;
