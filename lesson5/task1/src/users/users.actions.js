export const GET_USERS = "USERS/GET_USERS";
export const GO_PREV = "USERS/GO_PREV";
export const GO_NEXT = "USERS/GO_NEXT";

export const getUsers = (users) => {
  return {
    type: GET_USERS,
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
