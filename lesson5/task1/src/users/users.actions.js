export const GET_USERS_DATA = "USERS/GET_USERS_DATA";
export const GO_PREV = "USERS/GO_PREV";
export const GO_NEXT = "USERS/GO_NEXT";

export const getUsers = (users) => {
  return {
    type: GET_USERS_DATA,
    payload: {
      users,
    },
  };
};

export const goPrevPage = () => {
  return {
    type: GO_PREV,
  };
};

export const goNextPage = () => {
  return {
    type: GO_NEXT,
  };
};
