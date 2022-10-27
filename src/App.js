import React, { Component } from 'react';
import TodoList from './Component/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.todoNameRef = React.createRef();
  }

  state = {
    todos: []
  }

  handleAddTodo = event => {
    const name = this.todoNameRef.current.value;
    if(name === '') return

    const todos = [...this.state.todos];
    todos.push({id:1, name:name, complete:false});

    this.setState({todos});

    this.todoNameRef.current.value = null;
  }

  render() {
    return (
      <div>
        <p className='fs-1 text-center'>TODO</p>
        <div className='main'>
          <TodoList todos={this.state.todos}/>
          
          <div className="mb-2 d-flex input-and-button">
            <input className='form-control' type="text" ref={this.todoNameRef}/>
            <button type='button' className="btn btn-primary" onClick={this.handleAddTodo}>++</button>
            <button type='button' className="btn btn-secondary">Clear complete</button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
