import { users } from "../options/users";
import { GET_INPUT_TEXT } from "./users.actions";

const initState = {
  filterText: "",
  usersList: users,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_INPUT_TEXT: {
      return {
        ...state,
        filterText: action.payload.text,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
