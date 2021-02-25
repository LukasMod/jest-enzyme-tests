import React from 'react';

import { shallow, mount } from 'enzyme';

import guessedWordsContext from './guessedWordsContext';

//a functional component that calls useGuessedWords for our test
const FunctionalComponent = () => {
  guessedWordsContext.useGuessedWords();
  return <div></div>;
};

it('should useSuccess throws error when not wrapped in GuessedWordsProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow('useGuessedWords must be used within a GuessedWordsProvider');
});

it('should useSuccess not throws error when wrapped in GuessedWordsProvider', () => {
  expect(() => {
    mount(
      <guessedWordsContext.GuessedWordsProvider>
        <FunctionalComponent />
      </guessedWordsContext.GuessedWordsProvider>
    );
  }).not.toThrow();
});
