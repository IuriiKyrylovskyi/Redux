import React from "react";

const Task = ({ id, done, text, handleStatusChange, handleTaskDelete }) => {
  const listItemClass = `list-item ${done ? "list-item_done" : ""}`;

  return (
    <li className={listItemClass}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => handleStatusChange(id)}
        //
      />
      {text}
      <button
        className="list-item__delete-btn"
        onClick={() => handleTaskDelete(id)}
        //
      />
    </li>
  );
};

export default Task;
