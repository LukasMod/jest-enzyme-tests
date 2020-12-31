import React from 'react';

import { Congrats, GuessedWords } from './components';

import './App.css';

function App() {
  return (
    <div data-test="component-app">
      <Congrats success={false} />
      <GuessedWords
        guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 },
          { guessedWord: 'agile', letterMatchCount: 1 },
          { guessedWord: 'party', letterMatchCount: 5 },
        ]}
      />
    </div>
  );
}

export default App;
