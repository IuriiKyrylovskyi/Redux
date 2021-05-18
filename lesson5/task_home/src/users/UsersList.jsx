import React from "react";
import User from "./User";

const UsersList = ({ filtredUsersList }) => {
  return (
    <ul class="users">
      {filtredUsersList.map((user) => {
        const { id, name, age } = user;
        
        return <User key={id} name={name} age={age} />;
      })}
    </ul>
  );
};

export default UsersList;
