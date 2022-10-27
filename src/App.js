import React, { Component } from 'react';
import TodoList from './Component/TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'stuff 1', complete: false},
      { id: 2, name: 'stuff 2', complete: true}
    ]
  }

  render() {
    return (
      <div>
        <p className='fs-1 text-center'>TODO</p>
        <div className='main'>
          <TodoList todos={this.state.todos}/>
          
          <div className="mb-2 d-flex input-and-button">
            <input className='form-control' type="text" />
            <button type='button' className="btn btn-primary">++</button>
            <button type='button' className="btn btn-secondary">Clear complete</button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
