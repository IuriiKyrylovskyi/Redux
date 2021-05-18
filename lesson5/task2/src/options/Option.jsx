import React from "react";

const Option = ({ id, name, moveOption }) => {
  return (
    <li>
      <button className="options__list-item" onClick={() => moveOption(id)}>
        {name}
      </button>
    </li>
  );
};

export default Option;
