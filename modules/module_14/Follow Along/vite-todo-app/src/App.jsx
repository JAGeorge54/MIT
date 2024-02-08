import { useState } from 'react'
import Status from './components/Status';

function App() {
  const [status, setStatus] = useState('clean')
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleOnChange = (event) => {
    setTodoText(event.target.value);
  }

  const submitTodo = () => {
    if(!todoText) {
      setStatus('noText');
      return;
    }
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
    setTodoText('');
    setStatus('success');
  }
  
  return (
    <>
      <h1>ToDo Application</h1>
      <input 
      type="text"
      value={todoText}
      onChange={handleOnChange}
      />
      <button
        onClick={submitTodo}
      >Add Todo!</button>
      <Status status={status} setStatus={setStatus}/>
      {
        todos.length <= 0
        ? <p>Add a Todo to see your list of todos!</p>
        : <ul>
          {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      }
    </>
  )
}

export default App
