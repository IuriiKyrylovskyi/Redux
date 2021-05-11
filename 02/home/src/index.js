import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';

import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";


const newUser = { id: '76', name: "Sarah" };

store.dispatch(addUser(newUser));

store.subscribe(() => {
  store.getState();
});
const userIdToDelete = '7';

store.dispatch(deleteUser(userIdToDelete));

store.subscribe(() => {
  store.getState();
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



