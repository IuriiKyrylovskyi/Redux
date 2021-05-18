import React from "react";

const Filter = ({ handleInput }) => {
  return (
    <div className="filter">
      <span className="filter__count">5</span>
      <input
        type="text"
        className="filter__input"
        value="a"
        onChange={(e) => handleInput(e.target.value)}
        //
      />
    </div>
  );
};

export default Filter;
