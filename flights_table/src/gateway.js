// https://www.mockapi.io/projects/60a936bc20a6410017306e80
const baseUrl = "https://api.iev.aero/api/flights/10-02-2020";

const year = new Date().getUTCFullYear();
const month = new Date().getMonth();
const dateNnumber = new Date().getDate();

export const fetchTasksList = () => {
  // return fetch(`${baseUrl}/${dateNnumber}-${month}-${year}`).then((response) => {
  return fetch(baseUrl).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Failed to fetch");
  });
};

export const createTask = (newTaskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(newTaskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(updatedTaskData),
  }).then((response) => {
    if (!response) {
      throw new Error("Failed to update task");
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
  });
};
