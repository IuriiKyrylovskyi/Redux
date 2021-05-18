import React from "react";
import Option from "./Option";

const Options = ({ title, options, moveOption }) => {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map((option) => {
          const { id, name } = option;

          return <Option
            key={id} id={id}
            name={name}
            moveOption={moveOption}
          />;
        })}
      </ul>
    </div>
  );
};

export default Options;
