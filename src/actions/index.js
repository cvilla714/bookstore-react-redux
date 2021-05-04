/* eslint-disable object-curly-newline */
import { CREATE_BOOK, DELETE_BOOK, CHANGE_FILTER, SEARCH_BOOK } from './types';

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

export const searchBook = (text) => ({
  type: SEARCH_BOOK,
  payload: text,
});
