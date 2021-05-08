const initState = {
  usersList: [],
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat(user);
    case REMOVE_USER:
      return state.filter((user) => user.id !== id);
    default:
      return state;
  }
};
