import users from "./users";

const initState = {
  usersList: users,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default usersReducer;
