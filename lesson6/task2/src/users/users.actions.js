export const SHOW_SPINNER = "USERS/SHOW_SPINNER";
export const USER_DATA_RECIEVED = "USERS/USER_DATA_RECIEVED";

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const userDataRecieved = (userData) => {
  return {
    type: USER_DATA_RECIEVED,
    payload: {
      userData,
    },
  };
};
