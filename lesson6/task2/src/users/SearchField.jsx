import React, { useState } from "react";
import { connect } from "react-redux";
import { userDataSelector } from "./users.selectors";

const SearchField = ({ userData, handleChange }) => {
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    return setUserName(e.target.value);
  };

  const { name } = userData;
  
  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={name}
        onChange={handleChange}
        //
      />
      <button
        className="name-form__btn btn"
        onClick={handleClick}
        //
      >
        Show
      </button>
    </div>
  );
};

const mapState = (state) => {
  return {
    userData: userDataSelector(state),
  };
};

const mapDispatch = {
  handleChange,
};

export default connect(mapState, mapDispatch)(SearchField);
