import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import { createBookAction } from './actions/index';

const INITIAL_STATE = [
  {
    id: 0,
    name: 'Harry Potter',
    category: 'Sci-fi',
  },
  {
    id: 1,
    name: 'Star Trek',
    category: 'Sci-fi',
  },
];

INITIAL_STATE.map((book) => store.dispatch(createBookAction(book)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
