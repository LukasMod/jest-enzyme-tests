import React from 'react';
import PropTypes from 'prop-types';

const EnterWordButton = (props) => {
  const contents =
    props.guessCount > 0 ? null : (
      <button
        data-test="component-enter-word-button"
        className="btn btn-success mb-2"
        onClick={() => {
          props.setUserEntering();
        }}>
        Enter your own secret word
      </button>
    );

  return <div data-test="component-enter-word">{contents}</div>;
};

EnterWordButton.propTypes = {
  guessCount: PropTypes.number,
  setUserEntering: PropTypes.func,
};

export default EnterWordButton;
