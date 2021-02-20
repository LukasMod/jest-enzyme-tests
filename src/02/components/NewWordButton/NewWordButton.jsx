import React from 'react';
import PropTypes from 'prop-types';

export const UnconnectedNewWordButton = (props) => {
  const contents = !props.success ? null : (
    <button
      data-test="component-new-word-button"
      className="btn btn-primary mb-2"
      onClick={() => {
        props.resetAction();
      }}>
      New Word
    </button>
  );

  return <div data-test="component-new-word">{contents}</div>;
};

UnconnectedNewWordButton.propTypes = {
  success: PropTypes.bool,
  resetAction: PropTypes.func,
};

export default UnconnectedNewWordButton;
