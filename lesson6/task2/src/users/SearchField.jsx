import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";
// import { getUserData } from "../gateway";

const SearchField = ({ fetchUserData }) => {
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    return setUserName(e.target.value);
  };

  const handleUserSearch = () => {
    fetchUserData(userName);
    // showSpinner();
    // getUserData(userName).then((userData) => userDataRecieved(userData));
  };

  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={userName}
        onChange={handleChange}
        //
      />
      <button
        className="name-form__btn btn"
        onClick={handleUserSearch}
        //
      >
        Show
      </button>
    </div>
  );
};

SearchField.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
  // showSpinner: PropTypes.func.isRequired,
  // userDataRecieved: PropTypes.func.isRequired,
};

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
  // showSpinner: usersActions.showSpinner,
  // userDataRecieved: usersActions.userDataRecieved,
};

export default connect(null, mapDispatch)(SearchField);
