import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { tasksRootReducer } from "./tasks";
import { authReducer } from "./auth/authReducer";

const rootReducer = combineReducers({
  tasks: tasksRootReducer,
  isAuth: authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
