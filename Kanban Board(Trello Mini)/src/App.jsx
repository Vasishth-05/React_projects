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

  return (
    <>
      <Header/>
      <Board tasks={tasks}/>
      <AddTaskModel/>
    </>
  )
}

export default App
