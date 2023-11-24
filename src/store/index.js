import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { tasksRootReducer } from "./tasks";

const rootReducer = combineReducers({
  tasks: tasksRootReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
