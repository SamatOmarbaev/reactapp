import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
    return (
        <ul className="tasks__list">
            {tasks.map((task, index) =>
                <TaskItem 
                    task={task}
                    number={index + 1}
                    key={task.id}
                    deleteTask={deleteTask}
                />
            )}
        </ul>
    );
}
 
export default TaskList;