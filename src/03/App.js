import React from 'react';
import './App.css';

import Input from './Input';

function App() {
  return (
    <div data-test="component-app">
      <Input secretWord="test" />
    </div>
  );
}

export default App;
