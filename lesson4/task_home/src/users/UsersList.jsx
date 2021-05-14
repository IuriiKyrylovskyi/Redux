import React from "react";
import { connect } from "react-redux";
import * as usersActions from "./../users.actions";
import User from "./User";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 4;

function UsersList({ users, currentPage, goPrev, goNext }) {
  const totalItems = users.length;

  const itemsPerPage = ITEMS_PER_PAGE;

  const indexMin = currentPage * itemsPerPage;
  const indexMax = indexMin + itemsPerPage;

  return (
    <>
      <Pagination goPrev={goPrev} goNext={goNext} currentPage={currentPage + 1} totalItems={totalItems} itemsPerPage={itemsPerPage} />
      <ul className="users">
        {users.length > 0 &&
          users.reduce((acc, user, index) => (index >= indexMin && index < indexMax)
            ? acc.concat(<User key={user.id} name={user.name} age={user.age} />)
            : acc, [])}
      </ul>
    </>
  );
}

const mapState = (state) => {
  return {
    users: state.users.usersList,
    currentPage: state.users.currentPage,
  };
};

const mapDispatch = {
  goPrev: usersActions.goPrevPage,
  goNext: usersActions.goNextPage,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
