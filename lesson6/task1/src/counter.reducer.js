import { DECREMENT, INCREMENT, RESET } from "./counter.actions";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case DECREMENT: {
      return state - 1;
    }
    case INCREMENT: {
      return state + 1;
    }
    case RESET: {
      return 0;
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
