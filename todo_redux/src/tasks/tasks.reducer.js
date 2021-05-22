import { GET_TASKS_LIST, UPDATE_TASK, DELETE_TASK } from "./tasks.actions";

const initState = {
  tasksList: [],
  done: false,
  id: null,
};

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TASKS_LIST: {
      return {
        ...state,
        tasksList: action.payload.tasks,
      };
    }
    case UPDATE_TASK: {
      return {
        ...state,
        done: action.payload.done,
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        id: action.payload.taskId,
      };
    }
    default: {
      return state;
    }
  }
};

export default tasksReducer;
