import { useState } from 'react'
import './App.css'
import AddTaskModel from './components/AddTaskModel'
import Board from './components/Board'
import Header from './components/Header'

function App() {

  const [tasks,setTasks] = useState([]);

  const [isOpen,setIsOpen] = useState(false);

  function handleAddTask(newTask){
    setTasks([...tasks,newTask]);
    return null;
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

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Board tasks={tasks} handleAddTask={handleMoveTask} handleMoveTask={handleMoveTask} handleDeleteTask={handleDeleteTask} />
      <AddTaskModel isOpen={isOpen} setIsOpen={setIsOpen} handleAddTask={handleAddTask} />
    </>
  )
}

export default App
