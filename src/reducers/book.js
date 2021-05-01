import { CREATE_BOOK, DELETE_BOOK } from '../actions/types';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state;
    default:
      return state;
  }
};

export default bookReducer;
