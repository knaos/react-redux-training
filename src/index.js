import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import {
  reducers,
  incrementAction,
  decrementAction,
  addTodo,
  markTodoDone
} from './store';

let store = createStore(reducers);

const disptachCopy = store.dispatch;
store.dispatch = function(action) {
  console.log(`Action dispatched: ${action.type}`);
  console.log(action);
  disptachCopy(action);
};

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      todoLabel: '',
      todoList: []
    };

    store.subscribe(() => {
      const { count, todo } = store.getState();
      this.setState({ count: count, todoList: todo });
    });
  }

  increment = () => {
    store.dispatch(incrementAction());
  };

  decrement = () => {
    store.dispatch(decrementAction());
  };

  doubleValue = () => {
    const { count } = this.state;

    store.dispatch(incrementAction(count));
  };

  plusFive = () => {
    store.dispatch(incrementAction(5));
  };

  onTodoChange = e => {
    this.setState({ todoLabel: e.target.value });
  };

  onAddTodo = () => {
    const { todoLabel } = this.state;
    store.dispatch(addTodo(todoLabel));
    this.setState({ todoLabel: '' });
  };

  onTodoToggle = todoId => {
    console.log('Todo toggled:', todoId);
    store.dispatch(markTodoDone(todoId));
  };

  render() {
    const { count, todoList, todoLabel } = this.state;
    return (
      <div>
        <h1>Hello Redux</h1>
        <div className='counter'>
          <h2>Counter: {count}</h2>
          <button onClick={this.increment}>Increment +</button>
          <button onClick={this.decrement}>Decrement -</button>
          <button onClick={this.doubleValue}>X2</button>
          <button onClick={this.plusFive}>+5</button>
        </div>
        <hr></hr>
        <div className='todo'>
          <h2>Todo app</h2>
          <input
            placeholder='Add todo here...'
            value={todoLabel}
            onChange={this.onTodoChange}></input>
          <button onClick={this.onAddTodo}>Add</button>
          <ul>
            {todoList.map((todo, index) => (
              <li key={index}>
                <input
                  type='checkbox'
                  checked={todo.done}
                  onChange={() => {
                    this.onTodoToggle(index);
                  }}
                />
                <span>{todo.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById('root'));
