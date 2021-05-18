import { users } from "../options/users";
import { GET_INPUT_TEXT } from "./users.actions";

const initState = {
  filterText: "",
  usersList: users,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_INPUT_TEXT: {
      const inputedText = action.payload.text;

      const filteredUsersList = state.usersList.users.filter((user) => {
        user.name.includes(inputedText);
      });

      return {
        usersList: filteredUsersList,
        filterText: inputedText,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
