import { combineReducers } from 'redux';
import bookReducer from './book';
import filterReducer from './filter';

const allReducers = combineReducers({
  book: bookReducer,
  filter: filterReducer,
});

export default allReducers;
