import React from "react";
import { PropTypes } from "prop-types";
import Task from "./Task";

const TasksList = ({ tasks, handleStatusChange, handleTaskDelete }) => {
  const sortedTasks = tasks.slice().sort((a, b) => a.done - b.done);

  return (
    <ul className="list">
      {sortedTasks.length > 0 &&
        sortedTasks.map((task) => {
          const { id, text } = task;

          return (
            <Task
              key={id}
              id={id}
              text={text}
              handleStatusChange={handleStatusChange}
              handleTaskDelete={handleTaskDelete}
              //
            />
          );
        })}
    </ul>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  handleStatusChange: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
};

export default TasksList;
