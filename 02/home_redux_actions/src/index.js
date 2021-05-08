import store from "./store.js";
import { addUser, deleteUser } from "./users.actions";

const newUser = { id: 76, name: "Sarah" };

store.dispatch(addUser(newUser));

const userIdToDelete = 76;

store.dispatch(deleteUser(userIdToDelete));