const ADD_USER = "USERS/ADD_USER";
const DELETE_USER = "USERS/DELETE_USER";

export const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
