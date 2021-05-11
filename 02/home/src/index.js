import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";


const newUser = { id: 76, name: "Sarah" };
// const newUser2 = { id: 25, name: "S" };

store.dispatch(addUser(newUser));
// store.dispatch(addUser(newUser2));

store.subscribe(() => {
  store.getState();
  console.log(store.getState());
});
const userIdToDelete = 7;

store.dispatch(deleteUser(userIdToDelete));

store.subscribe(() => {
  store.getState();
  console.log(store.getState());
});

ReactDOM.render(
    <App />,
  document.getElementById('root')
);



