import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [todo,setTodo] = useState([]);

  const handleAddTodos = (e) => {
    e.preventDefault();
    setTodo([...todo,input]);
    setInput('');
  } 

  const handleDeleteTodo = (index) => {
    const deleteTodo = todo.filter((_,currentIndex) => {
      return currentIndex !== index
    } );
    setTodo(deleteTodo);
  }

  return (
    <main>
      <form onSubmit={handleAddTodos}>
      <h4>TODO APP</h4>
      <input type="text" placeholder='Enter a task '
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>
      <br />
      </form>
      <ul>
      {todo.map((todoValue,index) => 
        <li key={index}>
          {todoValue}
          <button onClick={ () => handleDeleteTodo(index)}>
            delete
          </button>
        </li>
      )}
      </ul>
    </main>
  )
  
}

export default App
