import { options } from "./optionsList";

const initState = {
  optionsList: options,
  selected: [],
};

const optionsReducer = (state = initState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default optionsReducer;
