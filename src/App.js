import React, { Component } from 'react';
import TodoList from './Component/TodoList';

class App extends Component {

render() {
    return (
      <div className='main'>
        <TodoList />
        <div className="input-and-button">
          <input className='form-control' type="text" />
          <button type='button' className="btn btn-primary">++</button>
          <button type='button' className="btn btn-secondary">Clear complete</button>
        </div>
      </div>
    );
  }
}
export default App;
