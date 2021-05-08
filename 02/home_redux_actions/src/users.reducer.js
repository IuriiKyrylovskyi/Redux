const ADD_USER = "REDUCER/ADD_USER";
const REMOVE_USER = "REDUCER/REMOVE_USER";

const addUser = () => {
  return {
    type: ADD_USER,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return state.concat(user);
    case REMOVE_USER:
      return state.filter((user) => user.id !== id);
    default:
      return state;
  }
};
