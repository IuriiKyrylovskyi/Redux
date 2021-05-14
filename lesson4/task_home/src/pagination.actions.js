export const GO_PREV_PAGE = "PAGINATION/GO_PREV_PAGE";
export const GO_NEXT_PAGE = "PAGINATION/GO_NEXT_PAGE";

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
