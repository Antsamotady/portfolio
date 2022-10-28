import React, { Component, useState } from 'react';
import TodoList from './Component/TodoList';
import {v4 as uuidv4} from 'uuid';
import { useRef } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if(name === '') return

    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}];
    })
    todoNameRef.current.value = null;
  } 

  return (
    <div>
      <p className='fs-1 text-center'>TODO</p>
      <div className='main'>
        <TodoList todos={todos}/>
        
        <div className="mb-2 d-flex input-and-button">
          <input className='form-control' type="text" ref={todoNameRef}/>
          <button type='button' className="btn btn-primary" onClick={handleAddTodo}>++</button>
          <button type='button' className="btn btn-secondary">Clear complete</button>
        </div>
        <p className='text-center remain'>Remaining todos: <span className='badge'>0</span></p>
      </div>
    </div>
  );
}

export default App;
