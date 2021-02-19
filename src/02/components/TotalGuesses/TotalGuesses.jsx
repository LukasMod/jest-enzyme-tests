import React from 'react';
import PropTypes from 'prop-types';

const TotalGuesses = ({ guessCount }) => {
  return (
    guessCount > 0 && (
      <div data-test="component-total-guesses">Total Guesses: {guessCount}</div>
    )
  );
};

TotalGuesses.propTypes = {
  guessCount: PropTypes.number.isRequired,
};

export default TotalGuesses;
