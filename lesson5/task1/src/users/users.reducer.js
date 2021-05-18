import { GET_USERS_DATA, GO_PREV, GO_NEXT } from "./users.actions";
import { users } from "../options/users";

const initState = {
  usersList: users,
  currentPage: 0,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_DATA: {
      return users;
    }
    case GO_PREV: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }
    case GO_NEXT: {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
