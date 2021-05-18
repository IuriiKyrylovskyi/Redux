import React from "react";
import Option from "./Option";

import { options } from "./options";

const Options = ({ title, moveOption }) => {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map((option) => {
          const { id } = option;

          return <Option key={id} />;
        })}
      </ul>
    </div>
  );
};

export default Options;
