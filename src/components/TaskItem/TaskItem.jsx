import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./style.css";
import MyButton from "../UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { removeTask } from "../../store/tasks/taskReducer";

const TaskItem = ({ task, number }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const deleteTask = (e) => {
    e.stopPropagation();
    dispatch(removeTask(task.id));
  };

  return (
    <li className="task__item" onClick={() => setIsChecked((prev) => !prev)}>
      <div className="task__item__info">
        <input
          type="checkbox"
          checked={isChecked}
          className="task__item__checkbox"
        />
        <div className="task__text">
          {number}. <div className="task__item__text">{task.text}</div>
        </div>
      </div>
      <MyButton onClick={deleteTask}>
        <RxCross2 />
      </MyButton>
    </li>
  );
};

export default TaskItem;
