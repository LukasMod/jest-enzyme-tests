import React from 'react';
import PropTypes from 'prop-types';

const NewWordButton = (props) => {
  const contents =
    props.giveUp || props.success ? (
      <button
        data-test="component-new-word-button"
        className="btn btn-primary mb-2"
        onClick={() => {
          props.resetAction();
        }}>
        New Word
      </button>
    ) : null;

  return (
    <div data-test="component-new-word" className="container">
      {contents}
    </div>
  );
};

NewWordButton.propTypes = {
  success: PropTypes.bool,
  resetAction: PropTypes.func,
};

export default NewWordButton;
