import { GET_USERS_DATA, GO_PREV_PAGE, GO_NEXT_PAGE } from "./users.actions";
import users from "./users";

const initState = {
  usersList: users,
  currentPage: 0,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_DATA: {
      return users;
    }
    case GO_PREV_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }
    case GO_NEXT_PAGE: {
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
