import { createStore, combineReducers } from "redux";
import optionsReducer from "./options/options.reducer";

const appStore = combineReducers({
  options: optionsReducer,
});

const store = createStore(appStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
