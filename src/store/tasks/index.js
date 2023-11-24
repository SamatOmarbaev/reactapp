import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";
import { modalReducer } from "./modalReducer";

export const tasksRootReducer = combineReducers({
  task: taskReducer,
  modal: modalReducer,
});
