import React from 'react'

function Todo({todo, onToggleTodo}) {

  function handleTodoClick() {
    onToggleTodo(todo.id);
  }

  return (
    <div className="mb-2 form-check">
      <input className="form-check-input" type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {todo.name}
      </label>
    </div>
  )
}

export default Todo;