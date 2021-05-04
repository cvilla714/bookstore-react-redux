import { CREATE_BOOK, DELETE_BOOK, CHANGE_FILTER } from './types';

export const createBookAction = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const deleteBookAction = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});

export const filterBook = (category) => ({
  type: CHANGE_FILTER,
  payload: category,
});
