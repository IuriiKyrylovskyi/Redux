import { createStore, combineReducers } from "redux";
import languageReducer from "./language.reducer";
import cartReducer from "./cart.reducer";
import userReducer from "./user.reducer";

const appStore = combineReducers({
  language: languageReducer,
  cart: cartReducer,
  user: userReducer,
});

const store = createStore(appStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
