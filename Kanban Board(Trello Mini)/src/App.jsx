import { useState } from 'react'
import './App.css'
import AddTaskModel from './components/AddTaskModel'
import Board from './components/Board'
import Header from './components/Header'

function App() {

  const [tasks,setTasks] = useState([
    {
      id:1,
      title:"Learn React",
      status:"todo"
    },
    {
      id:2,
      title:"Build Project",
      status:"doing"
    },
    {
      id:3,
      title:"Deploy Apps",
      status:"done"
    }
  ])
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

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Board tasks={tasks} handleAddTask={handleMoveTask} />
      <AddTaskModel isOpen={isOpen} setIsOpen={setIsOpen} handleAddTask={handleAddTask} />
    </>
  )
}

export default App
