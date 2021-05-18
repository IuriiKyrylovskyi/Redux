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

      const filteredUsersList = state.usersList.filter((user) => {
        return user.name.toLowerCase().includes(inputedText.toLowerCase());
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
