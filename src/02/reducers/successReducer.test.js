import { actionTypes } from '../actions';
import successReducer from './successReducer';

it('should return default initial state of `false` when no action is passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
it('should return state of true upon receiving an action of type `CORRECT_GUESS`', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
it('should return state of false upon receiving an action of type `RESET_GAME`', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.RESET_GAME,
  });
  expect(newState).toBe(false);
});
