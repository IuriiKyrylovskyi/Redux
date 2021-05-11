import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from "./store.js";
import { addUser, deleteUser } from "./users.actions.js";


const newUser = { id: 76, name: "Sarah" };

store.dispatch(addUser(newUser));

const userIdToDelete = 76;

store.dispatch(deleteUser(userIdToDelete));

store.subscribe(() => {
  store.getState();
  console.log(store.getState());
});

ReactDOM.render(
    <App />,
  document.getElementById('root')
);



