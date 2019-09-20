import { combineReducers } from 'redux';

// Action
export function incrementAction(amount = 1) {
  return {
    type: 'INCREMENT',
    amount: amount
  };
}

export function decrementAction() {
  return {
    type: 'DECREMENT'
  };
}

export function addTodo(label) {
  return {
    type: 'ADD_TODO',
    todo: {
      label: label,
      done: false
    }
  };
}

const TOGGLE_TODO = 'TOGGLE_TODO';
export function markTodoDone(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

// Reducer

function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.amount;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function todoReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.id) {
          return Object.assign({}, todo, { done: !todo.done });
        }
        return todo;
      });
    default:
      return state;
  }
}

export const reducers = combineReducers({
  count: counterReducer,
  todo: todoReducer
});
