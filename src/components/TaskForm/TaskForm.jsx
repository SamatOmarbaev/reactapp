import React, { useState } from "react";
import { useDispatch } from "react-redux";

import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import { addTask } from "../../store/tasks/taskReducer";
import { closeModal } from "../../store/tasks/modalReducer";

import "./style.css";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const createTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    if (inputValue.trim().length) {
      dispatch(addTask(newTask));
      dispatch(closeModal(false));
      setInputValue("");
    }
  };

  return (
    <form className="form__task">
      <MyInput
        type="text"
        placeholder="add new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <MyButton onClick={createTask}>Добавить</MyButton>
    </form>
  );
};

export default TaskForm;
