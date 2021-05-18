export const GET_INPUT_TEXT = "USERS/GET_INPUT_TEXT";

export const getInputText = (text) => {
  return {
    type: GET_INPUT_TEXT,
    payload: {
      text,
    },
  };
};
