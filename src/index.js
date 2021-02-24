import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import './index.css';

/**
 * set right import to the right folder to check exercise
 * remove 'skip' method from test
 *
 * 01 - Click Counter
 import App from './01/App';
 * 
 * 02 - Jotto App - REDUX
import App from './02/App';
import store from './02/configureStore';
*
* 03 - Jotto App - HOOKS
import App from './03/App';
*
*
 */

import App from './03/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <App /> */}
    {/* </Provider> */}

    <App />
  </React.StrictMode>,

  document.getElementById('root')
);
