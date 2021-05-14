import React from "react";

function User({name, age}) {
  return (
    <li className="user">
      <span className="user__name">Bob {name}</span>
      <span className="user__age">21 {age}</span>
    </li>
  );
}

export default User;
