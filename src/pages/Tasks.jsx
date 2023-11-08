import React, { useState } from "react";
import MyButton from "../components/UI/MyButton/MyButton";
import TaskForm from "../components/TaskForm/TaskForm";
import MyModal from "../components/UI/MyModal/MyModal";
import TaskList from "../components/TaskList/TaskList";
import Title from "../components/Title/Title";

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [modal, setModal] = useState(false);

    const deleteTask = (task) => {
        setTasks([...tasks].filter(t => t.id !== task.id));
    };

    const createTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setModal(false);
    };

    return (
        <div className="container">
            <Title children={tasks.length > 0 ? 'Список задач' : 'Задач нет'} />
            <MyButton
                onClick={() => setModal(true)}
            >
                Создать
            </MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <TaskForm create={createTask} />
            </MyModal>
            <TaskList 
                deleteTask={deleteTask}
                tasks={tasks}
            />
        </div>
    );
}

export default Tasks;