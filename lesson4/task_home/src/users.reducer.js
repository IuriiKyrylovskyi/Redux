import { GET_USERS_LIST } from "./users.actions";
import users from "./users";

const initState = {
  usersList: users,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS_LIST: {
      return users;
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
