import React, { useState } from "react";
import './style.css';

const TaskItem = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <li className="task__item">
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={() => setIsChecked(prev => !prev)}
                className="task__item__checkbox"
            />
            <span className="task__item__text">
                {props.number}. {props.task.text}
            </span>
            <button 
                onClick={() => props.deleteTask(props.task)}
                className="task__item__delete"
            >
                &times;
            </button>
        </li> 
    );
}
 
export default TaskItem;