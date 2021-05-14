export const GET_USERS_LIST = "USERS/GET_USERS_LIST";

export const getUsersList = (users) => {
  return {
    type: GET_USERS_LIST,
    payload: {
      users,
    },
  };
};

export const GO_PREV_PAGE = "USERS/GO_PREV_PAGE";
export const GO_NEXT_PAGE = "USERS/GO_NEXT_PAGE";

export const goPrevPage = () => {
  return {
    type: GO_PREV_PAGE,
  };
};

export const goNextPage = () => {
  return {
    type: GO_NEXT_PAGE,
  };
};