import React, { useState, useEffect } from "react";
import CreateTaskInput from "./CreateTaskInput";
import TasksList from "./TasksList";
import { fetchTasksList, createTask, updateTask, deleteTask } from "./tasksGateway";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasksList();
  }, []);

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

export default TodoList;
