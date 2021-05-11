import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";

// const newUser = { id: 76, name: "Sarah" };

store.dispatch(addUser(newUser));
store.subscribe(() => {
  store.getState();
  // console.log(store.getState());
});
// const userIdToDelete = 76;

store.dispatch(deleteUser(userIdToDelete));

store.subscribe(() => {
  store.getState();
  // console.log(store.getState());
});
