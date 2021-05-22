import React from "react";
import {connect} from 'react-redux'
import Task from "./Task";

const TasksList = ({ tasksList, handleStatusChange, handleTaskDelete}) => {
  const sortedTasks = tasksList.slice().sort((a, b) => a.done - b.done);

  return (
    <ul className="list">
      {sortedTasks.length > 0 &&
        sortedTasks.map((task) => {
          const { id, text } = task;

          return (
            <Task
              key={id}
              text={text}
              handleStatusChange={handleStatusChange}
              handleTaskDelete={handleTaskDelete}
            />
          );
        })}
    </ul>
  );
};

const mapState = state => {
  return {
    // tasks: state.tasksList.
  }
}

const mapDispatch = {
  // handleStatusChange: tasksActions.
  // handleTaskDelete: tasksActions.
}

export default connect(mapState, mapDispatch)(TasksList);
