import React from "react";
import User from "./User";
import Pagination from "./Pagination";

function UsersList({ users }) {
  return (
    <>
      <Pagination goPrev={goPrev} goNext={goNext} currentPage={currentPage} totalItems={totalItems} itemsPerPage={itemsPerPage} />
      <ul className="users">{users.length > 0 && users.map((user) => <User key={user.id} name={user.name} age={user.age} />)}</ul>
    </>
  );
}

export default UsersList;
