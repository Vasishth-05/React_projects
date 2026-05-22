import { useEffect, useState } from 'react'
import './App.css'
import AddTaskModel from './components/AddTaskModel'
import Board from './components/Board'
import Header from './components/Header'

function App() {

  const [tasks,setTasks] = useState(() => {

    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];

  });

  const [isOpen,setIsOpen] = useState(false);

  function handleAddTask(newTask){
    setTasks([...tasks,newTask]);
  }

  const handleMoveBackTask = (taskId,currentStatus) => {
     const updatedTask = tasks.map((task) => {

        if (task.id === taskId) {
          let newStatus = currentStatus;

        if(currentStatus === "done") {
          newStatus = "doing"
        }

        else if (currentStatus === "doing") {
          newStatus = "todo"
        }

        return {
          ...task,
          status : newStatus
        }

      }

      return task;

    });

    setTasks(updatedTask);
  }

  const handleMoveTask = (taskId,currentStatus) => {

    const updatedTask = tasks.map((task) => {

        if (task.id === taskId) {
          let newStatus = currentStatus;

        if(currentStatus === "todo") {
          newStatus = "doing"
        }

        else if (currentStatus === "doing") {
          newStatus = "done"
        }

        return {
          ...task,
          status : newStatus
        }

      }

      return task;

    });

    setTasks(updatedTask);

  }

  const handleDeleteTask = (taskId) => {

    const updatedTasks = tasks.filter(
      (task) => task.id !== taskId
    )

    setTasks(updatedTasks)

  }

  useEffect(() => {
    localStorage.setItem( "tasks", JSON.stringify(tasks))
  } , [tasks])


  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Board tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} handleDeleteTask={handleDeleteTask} handleMoveBackTask={handleMoveBackTask} />
      <AddTaskModel isOpen={isOpen} setIsOpen={setIsOpen} handleAddTask={handleAddTask} />
    </>
  )
}

export default App
