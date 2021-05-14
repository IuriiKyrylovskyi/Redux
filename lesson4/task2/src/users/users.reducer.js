import { ADD_USER, DELETE_USER } from "./users.actions";

const initState = {
  users: {
    usersList: [],
  },
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        users: {
          usersList: state.users.usersList.concat(action.payload.userData),
        },
      };
    }
    case DELETE_USER: {
      return {
        users: {
          usersList: state.users.usersList.filter((user) => user.id !== action.payload.userId),
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
