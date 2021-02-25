import React from 'react';
import hookActions from './actions/hookActions';
import './App.css';

import guessedWordsContext from './context/guessedWordsContext';
import languageContext from './context/languageContext';
import successContext from './context/successContext';

import Input from './Input';
import LanguagePicker from './LanguagePicker';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

/**
 * reducer to update state
 * @params state {object} - existing state
 * @params action {object} - contains 'type' and 'payload' properties
 * for the state update for example: { type: "setSecretWord", payload: "party"}
 * @return {object} - new state
 */

function reducer(state, action) {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
    case 'setLanguage':
      return { ...state, language: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
    language: 'en',
  });

  const setSecretWord = (secretWord) =>
    dispatch({ type: 'setSecretWord', payload: secretWord });

  const setLanguage = (language) =>
    dispatch({ type: 'setLanguage', payload: language });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status" />
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <guessedWordsContext.GuessedWordsProvider>
          <successContext.SuccessProvider>
            <Congrats success={false} />
            <Input secretWord={state.secretWord[0]} />
          </successContext.SuccessProvider>
          <GuessedWords />
        </guessedWordsContext.GuessedWordsProvider>
      </languageContext.Provider>
    </div>
  );
}

export default App;
