import React from 'react';

import guessedWordsContext from './context/guessedWordsContext';
import languageContext from './context/languageContext';
import stringsModule from './helpers/strings';

const GuessedWords = () => {
  const [guessedWords] = guessedWordsContext.useGuessedWords();
  let contents;
  const language = React.useContext(languageContext);

  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
        {stringsModule.getStringByLanguage(language, 'guessPrompt')}
      </span>
    );
  } else {
    const guessedWordsRows = guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>{stringsModule.getStringByLanguage(language, 'guessedWords')}</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>
                {stringsModule.getStringByLanguage(
                  language,
                  'guessColumnHeader'
                )}
              </th>
              <th>
                {stringsModule.getStringByLanguage(
                  language,
                  'matchingLettersColumnHeader'
                )}
              </th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

export default GuessedWords;
