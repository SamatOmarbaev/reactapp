import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./style.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from "react-redux";

const TaskList = () => {
  const { tasks } = useSelector((state) => state.tasks.task);

  return (
    <TransitionGroup className="tasks__list">
      {tasks.map((task, index) => (
        <CSSTransition key={task.id} timeout={500} classNames="task">
          <TaskItem task={task} number={index + 1} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TaskList;
