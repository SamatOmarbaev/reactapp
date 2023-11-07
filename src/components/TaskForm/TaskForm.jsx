import React, { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import './style.css';

const TaskForm = ({create}) => {
    const [inputValue, setInputValue] = useState('');

    const createTask = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        }

        if (inputValue.trim().length) {
            create(newTask);
            setInputValue('');
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
            <MyButton
                onClick={createTask}
            >
                Добавить
            </MyButton>
        </form>
    );
}
 
export default TaskForm;