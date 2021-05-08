const initState = {
  usersList: [],
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        usersList: state.usersList.concat(action.payload),
      };

    case REMOVE_USER:
      return {
        usersList: state.usersList.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};
