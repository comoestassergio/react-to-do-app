import React from "react";
import '../styles/FormGroup.css'


const FormGroup = ({ input, setInput, tasks, setTasks }) => {

    const inputHandler = (e) => {
        setInput(e.target.value.toLowerCase())
    }

    const submitHandler = e => {
        e.preventDefault()
        setTasks(tasks.concat({text: input, id: Math.random()* 1000, finished: false}))
        setInput('')
    }

    return (
        <form className="form-group">
            <input  className='input-field' type="text" placeholder="new task" pattern='[A-Za-z\d]' value={input} onChange={inputHandler} required/>
            <button className="submit-btn" type="submit" onClick={submitHandler}><i className="fa-solid fa-plus"></i></button>
        </form>
    )
}

export default FormGroup