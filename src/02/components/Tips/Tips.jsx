import React from 'react';
import PropTypes from 'prop-types';

const Tips = (props) => {
  return (
    props.secretWord && (
      <span data-test="guess-tips" className="fs-5">
        Secret word has {props.secretWord.length} letters
        <p className="fs-6 text-white-50">Dev help: {props.secretWord}</p>
      </span>
    )
  );
};

Tips.propTypes = {
  secretWord: PropTypes.string,
};

export default Tips;
