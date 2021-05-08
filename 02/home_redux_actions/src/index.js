import store from "./store.js";
import { addUser, deleteUser } from "./users.actions";

// const newUser = { id: 76, name: "Sarah" };

store.dispatch(addUser());

// const userIdToDelete = 76;

store.dispatch(deleteUser());

store.subscribe(() => {
  store.getState();
});
