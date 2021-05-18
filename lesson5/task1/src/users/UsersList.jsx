import React from "react";
import User from "./User";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 4;

const UsersList = ({ users }) => {
  const goPrev = () => {
    console.log("goPrev");
  };

  const goNext = () => {
    console.log("goNext");
  };

  const currentPage = 1;
  const totalItems = users.length;
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
          const { name, age } = user;

          return <User name={name} age={age} />;
        })}
      </ul>
    </>
  );
};

export default UsersList;
