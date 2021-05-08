import { createStore } from "redux";
import { usersReducer } from "./users.reducer.js";
import { addUser, deleteUser } from "./users.actions";

const store = createStore(usersReducer);
