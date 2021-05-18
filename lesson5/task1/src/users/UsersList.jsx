import React from "react";
import User from "./User";
import Pagination from "./Pagination";

import { users } from "../options/users";

const ITEMS_PER_PAGE = 4;

const currentPage = 0;

const UsersList = () => {
  //({ users }) => {
  const start = currentPage * ITEMS_PER_PAGE;
  const usersToDisplay = users.slice(start, start + ITEMS_PER_PAGE);
  const totalItems = users.length;

  const goPrev = () => {
    return currentPage !== 0 && start - ITEMS_PER_PAGE && console.log("goPrev");
    // console.log("goPrev");
  };

  const goNext = () => {
    return currentPage !== totalItems && start + ITEMS_PER_PAGE && console.log("goNext");
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
        {usersToDisplay.map((user) => {
          const { id, name, age } = user;

          return <User key={id} name={name} age={age} />;
        })}
      </ul>
    </>
  );
};

export default UsersList;
