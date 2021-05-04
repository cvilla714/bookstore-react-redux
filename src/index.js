/* eslint-disable  comma-dangle */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import { createBookAction } from './actions/index';

const uniqid = require('uniqid');

const INITIAL_STATE = [
  {
    id: uniqid.process(),
    name: 'Harry Potter',
    category: 'Sci-Fi',
  },
  {
    id: uniqid.process(),
    name: 'Star Trek',
    category: 'Sci-Fi',
  },
];

INITIAL_STATE.map((book) => store.dispatch(createBookAction(book)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
