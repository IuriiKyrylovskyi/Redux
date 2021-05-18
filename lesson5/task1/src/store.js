import { createStore, combineReducers } from "redux";
import usersReducer from "./users/users.reducer";

const appStore = combineReducers({
  users: usersReducer,
});

const store = createStore(appStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
