import React from 'react';
import PropTypes from 'prop-types';

export const GiveUpButton = (props) => {
  const contents =
    props.success || props.giveUp ? null : (
      <button
        data-test="component-give-up-button"
        className="btn btn-danger mb-2"
        onClick={() => {
          props.giveUpGame();
        }}>
        Give Up
      </button>
    );

  return <div data-test="component-give-up">{contents}</div>;
};

GiveUpButton.propTypes = {
  success: PropTypes.bool,
  giveUp: PropTypes.bool,
  giveUpGame: PropTypes.func,
};

export default GiveUpButton;
