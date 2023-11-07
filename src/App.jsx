import React, { useState } from "react";
import MyButton from "./components/UI/MyButton/MyButton";
import TaskForm from "./components/TaskForm/TaskForm";
import MyModal from "./components/UI/MyModal/MyModal";
import TaskList from "./components/TaskList/TaskList";

function App() {
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
            <h1 className="title">Todo List</h1>
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

export default App;
