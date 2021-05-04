import { SEARCH_BOOK } from '../actions/types';

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_BOOK:
      return action.payload;

    default:
      return state;
  }
};

export default searchReducer;
