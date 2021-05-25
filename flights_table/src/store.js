import { createStore, combinedReducer,applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import fligtsReducer from "./tasks/flifgts.reducer";

const reducer = combinedReducer({
  flightsList: fligtsReducer,
 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
