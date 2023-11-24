const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "DELETE_TASK";

const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TASK:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    default:
      return state;
  }
};

export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const removeTask = (task) => ({ type: REMOVE_TASK, payload: task });
