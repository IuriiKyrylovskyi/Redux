import React, { useEffect } from "react";
import CreateTaskInput from "./CreateTaskInput";
import * as tasksAction from "../tasks/tasks.actions";
import TasksList from "./TasksList";
import { connect } from "react-redux";
import { tasksListSelector } from "../tasks/tasks.selectors";

const TodoList = ({ tasks, getTasksList }) => {
  useEffect(() => {
    getTasksList();
  }, [getTasksList]);

  return (
    <div>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput />
        <TasksList tasks={tasks} />
      </main>
    </div>
  );
};

const mapState = (state) => {
  return {
    tasks: tasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
};

export default connect(mapState, mapDispatch)(TodoList);
