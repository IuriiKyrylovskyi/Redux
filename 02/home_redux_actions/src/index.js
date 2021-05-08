import store from "./store.js";
import { addUser, deleteUser } from "./users.actions";

store.dispatch(addUser(user));

store.dispatch(deleteUser(id));
