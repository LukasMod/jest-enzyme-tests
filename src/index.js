import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './02/App';
import store from './02/configureStore';

/**
 * set right import to the right folder to check exercise
 * remove 'skip' method from test
 *
 * 01 - Click Counter
 * 02 - Congrats Component
 */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
