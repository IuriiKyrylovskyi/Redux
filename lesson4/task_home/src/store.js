import { createStore, combineReducers } from "redux";
import usersReducer from "./users.reducer";
// import paginationReducer from "./pagination.reducer";

const appStore = combineReducers({
  users: usersReducer,
  // currentPage: paginationReducer,
});

const store = createStore(appStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
