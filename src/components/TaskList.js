import React from "react";
import Task from "./Task";
import '../styles/TaskList.css'

const TaskList = ({tasks, setTasks}) => {
    return (
        <ul className="task-list">
            {tasks.map(task => {
                return <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
            })}
        </ul>
    )
}

export default TaskList