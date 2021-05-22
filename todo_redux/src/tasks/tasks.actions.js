import { fetchTasksList } from "../gateway";

export const TASKS_LIST_RECEIVED = "TASKS/TASKS_LIST_RECEIVED";

export const tasksListRecieved = (tasks) => {
  return {
    type: TASKS_LIST_RECEIVED,
    payload: {
      tasks,
    },
  };
};

export const getTasksList = () => {
  return function (dispatch) {
    fetchTasksList().then((tasks) => dispatch(tasksListRecieved(tasks)));
  };
};
