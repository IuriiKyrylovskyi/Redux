import { ADD_USER, DELETE_USER } from "./users.actions";

const initState = {
  usersList: [],
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        usersList: state.usersList.concat(action.payload),
      };

    case DELETE_USER:
      return {
        usersList: state.usersList.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};
