import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers/index';

const store = createStore(allReducers, composeWithDevTools());

export default store;
