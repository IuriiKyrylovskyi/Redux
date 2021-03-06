import { createStore } from "redux";

const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";
const RESET = "COUNTER/RESET";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

const initState = {
  history: [],
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        history: state.history.concat('+1'),
      };
    case DECREMENT:
      return {
        history: state.history.concat(-1),
      };
    case RESET:
      return {
        history: [],
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
