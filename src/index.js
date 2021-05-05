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
    chapters: 17,
    currentChapter: 2,
    author: 'J.K Rowling',
  },
  {
    id: uniqid.process(),
    name: 'The Lord of the rings',
    category: 'Sci-Fi',
    chapters: 19,
    currentChapter: 7,
    author: 'J. R. R. Tolkien',
  },
];

INITIAL_STATE.map((book) => store.dispatch(createBookAction(book)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
