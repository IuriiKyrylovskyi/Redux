export const GET_USERS_LIST = "USERS/GET_USERS_LIST";

export const getUsersList = (users) => {
  return {
    type: GET_USERS_LIST,
    payload: {
      users,
    },
  };
};
