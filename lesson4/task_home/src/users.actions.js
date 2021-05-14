export const GET_USERS_DATA = "USERS/GET_USERS_DATA";
export const GO_PREV_PAGE = "USERS/GO_PREV_PAGE";
export const GO_NEXT_PAGE = "USERS/GO_NEXT_PAGE";

export const getUsersData = (users) => {
  return {
    type: GET_USERS_DATA,
    payload: {
      users,
    },
  };
};

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