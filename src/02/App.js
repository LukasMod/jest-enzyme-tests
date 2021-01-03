import React from 'react';

import { Congrats, GuessedWords, Input } from './components';

import './App.css';

function App() {
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto The Game</h1>
      <Congrats success={true} />
      <Input />
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
