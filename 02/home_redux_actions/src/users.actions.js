const ADD_USER = "USERS/ADD_USER";
const DELETE_USER = "USERS/DELETE_USER";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
    // payload: { userId, userName },
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
    // payload: userId,
  };
};
