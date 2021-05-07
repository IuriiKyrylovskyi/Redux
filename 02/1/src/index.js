import { createStore } from "redux";

const INCREMENT = "CREATE/INCREMENT";
const DECREMENT = "CREATE/DECREMENT";

const increment = () => {
  return {
    type: INCREMENT,
  };
};

const decremrnt = () => {
  return {
    type: DECREMENT,
  }
}

const counterReducer = (state = 0, action) => {
  switch (action.type){
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counterReducer);
