import { actionTypes } from './../actions';

/**
 * @function guessedWordsReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new guessedWord state
 */

const guessedWordsReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    case actionTypes.CLEAR_WORD:
      return [];
    default:
      return state;
  }
};

export default guessedWordsReducer;
