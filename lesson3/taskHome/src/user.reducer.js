import { REMOVE_USER, SET_USER } from "./user.actions";

const initState = {
  user: null,
};
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        user: action.payload.userData,
      };
    }
    case REMOVE_USER: {
      return {
        user: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
