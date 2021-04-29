import { CREATE_BOOK, EDIT_BOOK } from './types';

export const createBookAction = (book) => {
	return {
		type: CREATE_BOOK,
		payload: book,
	};
};

export const deleteBookAction = (book) => {
	return {
		type: EDIT_BOOK,
		payload: book,
	};
};
