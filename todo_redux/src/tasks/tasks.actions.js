export const GET_TASKS_LIST = "TASKS/GET_TASKS_LIST";
export const UPDATE_TASK = "TASKS/UPDATE_TASK";
export const DELETE_TASK = "TASKS/DELETE_TASK";

export const getTaksList = (tasks) => {
  return {
    type: GET_TASKS_LIST,
    payload: {
      tasks,
    },
  };
};

export const updateTask = (id) => {
  return {
    type: UPDATE_TASK,
    payload: {
      id,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
};
