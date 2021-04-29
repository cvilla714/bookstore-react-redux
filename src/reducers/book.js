import { CREATE_BOOK, DELETE_BOOK } from '../actions/types';

const INITIAL_STATE = [
  {
    id: 1,
    name: 'Harry Potter',
    category: 'Sci-fi',
  },
  {
    id: 2,
    name: 'Star Trek',
    category: 'Sci-fi',
  },
];

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return state;
    case DELETE_BOOK:
      return state;
    default:
      return state;
  }
};

export default bookReducer;
