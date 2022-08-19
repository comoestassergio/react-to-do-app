import React from "react";
import '../styles/TaskList.css'

const Task = ({ task, tasks, setTasks }) => {

    const removeHandler = () => {
        setTasks(tasks.filter(el => el.id !== task.id))
    }

    const finishedHandler = () => {
        setTasks(tasks.map(el => {
            if (el.id === task.id) {
                return {
                    ...el, finished: !el.finished
                }
            }
            return el
        }))
    }

    return (
        <li className={`task ${task.finished === true ? `finished` : '' }`}>
            <p>{task.text}</p>
            <div>
                <button className="finished-btn" onClick={finishedHandler}><i className="fa-solid fa-check fa-xl"></i></button>
                <button className="remove-btn" onClick={removeHandler}><i className="fa-solid fa-xmark fa-xl"></i></button>
            </div>
        </li>
    )
}

export default Task