import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const errorMessage = (
    <span style={{ color: 'red', fontSize: '30px' }} data-test="error-message">
      error
    </span>
  );

  const handleClickIncrement = () => {
    setCount(count + 1);
    setError(false);
  };
  const handleClickDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else if (count === 0) {
      setError(true);
    }
  };

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      <button data-test="increment-button" onClick={handleClickIncrement}>
        Increment counter
      </button>
      <button data-test="decrement-button" onClick={handleClickDecrement}>
        Decrement counter
      </button>
      <hr />
      {error && errorMessage}
    </div>
  );
}

export default App;
