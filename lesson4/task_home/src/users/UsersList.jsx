import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";
import * as usersActions from "./../users.actions";
import * as paginationsActions from "./../pagination.actions";

function UsersList({ users, goPrev, goNext, currentPage }) {
  const totalItems = users.length;
  
  return (
    <>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={totalItems}
        // itemsPerPage={itemsPerPage}
      />
      <ul className="users">{users.length > 0 && users.map((user) => <User key={user.id} name={user.name} age={user.age} />)}</ul>
    </>
  );
}

const mapState = (state, props) => {
  return {
    users: state.users.usersList,
    // currentPage: state,
  };
};

const mapDispatch = {
  users: usersActions.getUsersList,
  // currentPage: paginationsActions.currentPage,
  goPrev: paginationsActions.goPrevPage,
  goNext: paginationsActions.goNextPage,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
