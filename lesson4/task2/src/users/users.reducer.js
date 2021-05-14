import { ADD_USER, DELETE_USER } from "./users.actions";

const initState = {
  usersList: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        usersList: state.usersList.concat(action.payload.userData),
      };
    }
    case DELETE_USER: {
      const newList = state.usersList.filter((user) => user.id !== action.payload.userId);

      return {
        usersList: newList,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
