import { options } from "./options/options";

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
