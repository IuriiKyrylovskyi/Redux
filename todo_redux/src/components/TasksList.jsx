import React from "react";
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

export default TasksList;
