import React, { useEffect } from "react";
import CreateTaskInput from "./CreateTaskInput";
import * as tasksAction from "../tasks/tasks.actions";
import TasksList from "./TasksList";
import { connect } from "react-redux";
import { tasksListSelector } from "../tasks/tasks.selectors";
import { fetchTasksList, createTask, updateTask, deleteTask } from "../gateway";

const TodoList = ({ tasksList, getTasksList }) => {
  useEffect(() => {
    getTasksList();
  }, [getTasksList]);

  const handleStatusChange = (id) => {
    const { done, text, createAt } = tasksList.find((task) => task.id);
    const updatedTask = {
      text,
      createAt,
      done: !done,
    };
    updateTask(id, updatedTask).then(fetchTasksList());
  };

  const handleTaskDelete = (id) => {
    deleteTask(id).then(fetchTasksList());
  };

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
          handleStatusChange={handleStatusChange}
          handleTaskDelete={handleTaskDelete}
          //
        />
      </main>
    </div>
  );
};

const mapState = (state) => {
  return {
    tasksList: tasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
};

export default connect(mapState, mapDispatch)(TodoList);
