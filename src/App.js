import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import FormGroup from './components/FormGroup';
import TaskList from './components/TaskList';


function App() {

  useEffect(() => {
    getFromLocalStorage()
  }, [])

  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    saveToLocalStorage()
  })

  const saveToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  const getFromLocalStorage = () => {
    if (localStorage.getItem('tasks') === null){
      localStorage.setItem('tasks', JSON.stringify([]))
    } else {
      let localTasks = JSON.parse(localStorage.getItem('tasks'))
      setTasks(localTasks)
    }
  }


  return (
    <div className="App">
      <Header />
      <FormGroup input={input} setInput={setInput} tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div> 
  );
}

export default App;
