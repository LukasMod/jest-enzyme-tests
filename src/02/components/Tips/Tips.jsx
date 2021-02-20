import React from 'react';
import PropTypes from 'prop-types';

const Tips = (props) => {
  return (
    props.secretWord && (
      <span data-test="guess-tips">
        Secret word has {props.secretWord.length} letters
        <p>Dev help: {props.secretWord}</p>
      </span>
    )
  );
};

Tips.propTypes = {
  secretWord: PropTypes.string,
};

export default Tips;
