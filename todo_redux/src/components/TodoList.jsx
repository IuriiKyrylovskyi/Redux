import React from "react";
import CreateTaskInput from "./CreateTaskInput";
import TasksList from "./TasksList";

const TodoList = () => {
  return (
    <div>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <CreateTaskInput />
        <TasksList />
      </main>
    </div>
  );
};

export default TodoList;
