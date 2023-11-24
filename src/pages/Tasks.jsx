import React from "react";
import { useDispatch, useSelector } from "react-redux";

import MyButton from "../components/UI/MyButton/MyButton";
import TaskForm from "../components/TaskForm/TaskForm";
import MyModal from "../components/UI/MyModal/MyModal";
import TaskList from "../components/TaskList/TaskList";
import Title from "../components/Title/Title";
import { openModal } from "../store/tasks/modalReducer";

function Tasks() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks.task);

  return (
    <div className="container">
      <Title children={tasks.length > 0 ? "Список задач" : "Задач нет"} />
      <MyButton onClick={() => dispatch(openModal(true))}>Создать</MyButton>
      <MyModal>
        <TaskForm />
      </MyModal>
      <TaskList />
    </div>
  );
}

export default Tasks;
