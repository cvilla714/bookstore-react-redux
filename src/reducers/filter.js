import { CHANGE_FILTER } from '../actions/types';

const filterReducer = (state = [], action) => {
  //   state = [...action.payload.books];
  switch (action.type) {
    case CHANGE_FILTER:
      //   console.log(action);
      return action.payload;

    default:
      console.log(state);

      return state;
  }
};

export default filterReducer;
