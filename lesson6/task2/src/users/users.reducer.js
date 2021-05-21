import { SHOW_SPINNER, USER_DATA_RECIEVED } from "./users.actions";

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
    case USER_DATA_RECIEVED: {
      return {
        ...state,
        userData: action.payload.userData,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
