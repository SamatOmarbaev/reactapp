import React, { useState } from "react";
import { RxCross2 } from 'react-icons/rx';
import './style.css';
import MyButton from "../UI/MyButton/MyButton";

const TaskItem = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <li className="task__item">
            <div className="task__item__info">
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={() => setIsChecked(prev => !prev)}
                    className="task__item__checkbox"
                />
                <div className="task__text">
                    {props.number}. <div className="task__item__text">{props.task.text}</div>
                </div>
            </div>
            <MyButton
                onClick={() => props.deleteTask(props.task)}
            >
                <RxCross2 />
            </MyButton>
        </li> 
    );
}
 
export default TaskItem;