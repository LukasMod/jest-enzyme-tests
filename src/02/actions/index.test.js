import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  it('should returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
