import { CREATE_BOOK, DELETE_BOOK } from './types';

export const createBookAction = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const deleteBookAction = (id) => ({
  type: DELETE_BOOK,
  payload: id,
});
