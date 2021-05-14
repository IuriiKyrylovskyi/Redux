import { GO_PREV_PAGE, GO_NEXT_PAGE } from "./pagination.actions";

const paginationReducer = (state = 0, action) => {
  switch (action.type) {
    case GO_PREV_PAGE: {
      return state - 1;
    }
    case GO_NEXT_PAGE: {
      return state + 1;
    }
    default: {
      return state;
    }
  }
};

export default paginationReducer;
