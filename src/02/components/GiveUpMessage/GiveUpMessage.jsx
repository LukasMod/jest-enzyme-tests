import React from 'react';
import PropTypes from 'prop-types';

const GiveUpMessage = (props) => {
  return (
    <>
      {props.giveUp ? (
        <div
          data-test="component-give-up-message"
          className="alert alert-danger">
          <span data-test="give-up-message">
            Don't worry and try again! The secret word was:{' '}
            <b data-test="component-give-up-message-secret-word">
              {props.secretWord}
            </b>
          </span>
        </div>
      ) : (
        <div data-test="component-give-up-message" />
      )}
    </>
  );
};

GiveUpMessage.propTypes = {
  giveUp: PropTypes.bool,
  secretWord: PropTypes.string,
};

export default GiveUpMessage;
