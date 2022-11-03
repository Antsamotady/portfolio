import React, { useState, useRef, useEffect } from 'react';
import TodoList from './Component/TodoList';
import {v4 as uuidv4} from 'uuid';

const LOCAL_STORAGE_NAKA = 'some.key';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAKA));
    try {
      if(storedTodos.length) setTodos(storedTodos);
    } catch (e) {
      console.log('Oh!');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_NAKA, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if(name === '') return

    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}];
    })
    todoNameRef.current.value = null;
  } 

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;

    setTodos(newTodos);
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    
    setTodos(newTodos);
  }

  return (
    <div>
      <p className='fs-1 text-center'>TODO</p>
      <div className='main'>
        <TodoList todos={todos} onToggleTodo={toggleTodo}/>
        
        <div className="mb-2 d-flex input-and-button">
          <input className='form-control' type="text" ref={todoNameRef}/>
          <button type='button' className="btn btn-primary" onClick={handleAddTodo}>++</button>
          <button type='button' className="btn btn-secondary clear-complete" onClick={handleClearTodos}>Clear complete</button>
        </div>
        <p className={showHideTag()}>Remaining todos: 
          <span className='badge'>{todos.filter(todo => !todo.complete).length}
          </span>
        </p>
      </div>
    </div>
  );

  function showHideTag() {
    if(todos.filter(todo => !todo.complete).length) 
      return 'text-center remain';
    return 'd-none';
  }
}

export default App;
