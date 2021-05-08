const ADD_USER = "ADD_USER";
const DELETE_USER = "DELETE_USER";

export const addUser = () => {
  return {
    type: ADD_USER,
    payload: { userId, userName },
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};
