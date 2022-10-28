import React from 'react'
import Todo from './Todo';

function TodoList({ todos, onToggleTodo }) {
  return (
    <div className='todo'>{
      todos.map(todo => {
        return <Todo key={todo.id} todo={todo} onToggleTodo={onToggleTodo}/>
      })
    }
    </div>
  )
}

export default TodoList;