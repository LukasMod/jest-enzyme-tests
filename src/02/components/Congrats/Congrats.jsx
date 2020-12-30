import React from 'react';

/**
 * Functional react component for congratulatory message
 * @function Congrats
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (od null if `success` prop is false)
 */

const Congrats = (props) => {
  return (
    <>
      {props.success ? (
        <div data-test="component-congrats">
          <span data-test="congrats-message">Congratulations!</span>
        </div>
      ) : (
        <div data-test="component-congrats" />
      )}
    </>
  );
};

export default Congrats;

//<div data-test="component-congrats">Success</div>