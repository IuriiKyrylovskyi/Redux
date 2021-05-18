import React from "react";
import { connect } from "react-redux";
import { getInputText } from "./users.actions";
import { usersListSelector, filterTextSelector } from "./users.selectors";
import User from "./User";
import Filter from "../Filter";

const UsersList = ({ filtredUsersList, filterText, handleInputText }) => {
  return (
    <>
      <Filter
        filterText={filterText}
        handleInput={handleInputText}
        count={filtredUsersList.length}
        //
      />

      <ul className="users">
        {filtredUsersList.map((user) => {
          const { id, name, age } = user;

          return <User key={id} name={name} age={age} />;
        })}
      </ul>
    </>
  );
};

const mapState = (state) => {
  return {
    filtredUsersList: usersListSelector(state),
    filterText: filterTextSelector(state),
  };
};

const mapDispatch = {
  handleInputText: getInputText,
};

export default connect(mapState, mapDispatch)(UsersList);
