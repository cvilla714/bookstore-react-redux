import { createStore } from 'redux';
import allReducers from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(allReducers, composeWithDevTools());

export default store;
