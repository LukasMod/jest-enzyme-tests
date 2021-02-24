import React from 'react';
import PropTypes from 'prop-types';

import languageContext from './context/languageContext';
import stringsModule from './helpers/strings';

const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext);
  const [currentGuess, setCurrentGuess] = React.useState('');

  const handleChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const submitGuessedWord = (event) => {
    event.preventDefault();
    setCurrentGuess('');
    // TODO: update guessedWords
    // TODO: check against secretWord and update success
    // const guessedWord = this.state.currentGuess;
    // if (guessedWord && guessedWord.length > 0) {
    //   this.props.guessWord(guessedWord);
    //   this.setState({ currentGuess: '' });
    // }
  };

  return (
    <div data-test="component-input">
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 p-2"
          type="text"
          placeholder={stringsModule.getStringByLanguage(
            language,
            'guessInputPlaceholder'
          )}
          value={currentGuess}
          onChange={handleChange}
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={submitGuessedWord}>
          {stringsModule.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
