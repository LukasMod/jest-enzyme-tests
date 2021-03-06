import { combineReducers } from 'redux';
import success from './successReducer';
import guessedWords from './guessedWordsReducer';
import secretWord from './secretWordReducer';
import giveUp from './giveUpReducer';
import userEnter from './userEnterReducer.js';
import serverError from './serverErrorReducer.js';

export default combineReducers({
  success,
  guessedWords,
  secretWord,
  giveUp,
  userEnter,
  serverError,
});
