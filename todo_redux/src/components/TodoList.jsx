import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import CreateTaskInput from "./CreateTaskInput";
import * as tasksAction from "../tasks/tasks.actions";
import TasksList from "./TasksList";
import { connect } from "react-redux";
import { tasksListSelector } from "../tasks/tasks.selectors";
import { fetchTasksList, createTask } from "../gateway";

const TodoList = ({ tasksList, getTasksList, updateTask, deleteTask }) => {
  useEffect(() => {
    getTasksList();
  }, [getTasksList]);

  const handleTaskCreate = (text) => {
    createTask({
      text,
      done: false,
      createdAt: new Date().toISOString(),
    }).then(fetchTasksList());
  };

  return (
    <div>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput onCreate={handleTaskCreate} />
        <TasksList
          tasks={tasksList}
          handleStatusChange={updateTask}
          handleTaskDelete={deleteTask}
          //
        />
      </main>
    </div>
  );
};

TodoList.propTypes = {
  tasksList: PropTypes.arrayOf(PropTypes.shape()),
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

const mapState = (state) => {
  return {
    tasksList: tasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
};

export default connect(mapState, mapDispatch)(TodoList);
