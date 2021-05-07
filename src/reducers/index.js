import { combineReducers } from 'redux';
import bookReducer from './book';
import filterReducer from './filter';
import searchReducer from './search';

const allReducers = combineReducers({
  book: bookReducer,
  filter: filterReducer,
  search: searchReducer,
});

export default allReducers;
