import React from "react";

const Task = ({ text, handleStatusChange, handleTaskDelete }) => {
  return (
    <li className="list-item">
      <input
        type="checkbox"
        className="list-item__checkbox"
        onChange={handleStatusChange}
        //
      />
      {text}
      <button
        className="list-item__delete-btn"
        onClick={handleTaskDelete}
        //
      />
    </li>
  );
};

export default Task;
