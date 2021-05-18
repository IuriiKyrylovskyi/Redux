import React from "react";
import User from "./User";
import Pagination from "./Pagination";

import { users } from "../options/users";

const ITEMS_PER_PAGE = 4;

const UsersList = () => {
  //({ users }) => {
  const currentPage = 1;
  const totalItems = users.length;

  const goPrev = () => {
    console.log("goPrev");
  };

  const goNext = () => {
    console.log("goNext");
  };

  return (
    <>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={ITEMS_PER_PAGE}
        //
      />
      <ul className="users">
        {users.map((user) => {
          const { id, name, age } = user;

          return <User key={id} name={name} age={age} />;
        })}
      </ul>
    </>
  );
};

export default UsersList;
