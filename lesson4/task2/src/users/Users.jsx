import React from "react";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";

function Users({ usersList, addUser, deleteUser }) {
  return (
    <div className="users">
      <button className="users__create-btn" onClick={addUser}>
        Create user
      </button>
      <ul className="users__list">
        {usersList.length > 0 &&
          usersList.map((user) => (
            <li key={user.userId} className="users__list-item">
              <span>User # {user.userId}</span>
              <button className="users__delete-btn" onClick={deleteUser}>
                +
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

const mapState = (state) => {
  return {
    usersList: state,
  };
};

const mapDispatch = {
  addUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
