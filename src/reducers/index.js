import { combineReducers } from 'redux';
import bookReducer from './book';

const allReducers = () =>
	combineReducers({
		book: bookReducer,
	});

export default allReducers;
