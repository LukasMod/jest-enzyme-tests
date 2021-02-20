import { getLetterMatchCount } from '../helpers';
import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  RESET_GAME: 'RESET_GAME',
  GIVE_UP: 'GIVE_UP',
  TRY_AGAIN: 'TRY_AGAIN',
  CLEAR_WORD: 'CLEAR_WORD',
};

export const resetGame = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.RESET_GAME,
    });
    dispatch({
      type: actionTypes.TRY_AGAIN,
    });
    dispatch({
      type: actionTypes.CLEAR_WORD,
    });

    return dispatch(getSecretWord());
  };
};

export const giveUpGame = () => {
  return (dispatch) => {
    console.log('click giveUpGame');
    dispatch({
      type: actionTypes.GIVE_UP,
    });
  };
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and  (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed word
 * @returns {function} - Redux Thunk function
 */

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

export const getSecretWord = () => {
  return (dispatch) => {
    return axios
      .get('https://random-word-api.herokuapp.com/word?number=1')
      .then((response) => {
        dispatch({
          type: actionTypes.SET_SECRET_WORD,
          payload: response.data[0],
        });
      });
  };
};
