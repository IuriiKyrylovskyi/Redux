import React from 'react'

function Users() {
  return (
    <div className="users">
      <button className="users__create-btn">Create user</button>
      <ul className="users__list">
        <li className="users__list-item">
          <span>User # 232286</span>
          <button className="users__delete-btn">+</button>
        </li>
        <li className="users__list-item">
          <span>User # 551949</span>
          <button className="users__delete-btn">+</button>
        </li>
        <li className="users__list-item">
          <span>User # 328468</span>
          <button className="users__delete-btn">+</button>
        </li>
      </ul>
    </div>
  );
}

export default Users
