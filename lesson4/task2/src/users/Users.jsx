import React from "react";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";

function Users({ users, createUser, removeUser }) {
  const onUserCreate = () => {
    const id = Math.round(Math.random() * 1000000);

    const newUser = {
      id,
      name: `User # ${id}`,
    };

    createUser(newUser);
  };

  return (
    <div className="users">
      <button className="users__create-btn" onClick={onUserCreate}>
        Create user
      </button>
      <ul className="users__list">
        {users.length > 0 &&
          users.map((user) => (
            <li key={user.id} className="users__list-item">
              <span>{user.name}</span>
              <button className="users__delete-btn" onClick={() => removeUser(user.id)}>
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
    users: state.users.usersList,
  };
};

const mapDispatch = {
  createUser: usersActions.addUser,
  removeUser: usersActions.deleteUser,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;
