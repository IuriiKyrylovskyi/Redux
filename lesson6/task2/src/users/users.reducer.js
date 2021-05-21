import { SHOW_SPINNER } from "./users.actions";

const initState = {
  userData: null,
  isFetching: false,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
