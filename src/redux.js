// Action
const action = {
  type: 'INCREMENT'
};
// Reducer

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}


let state = counter(2, action);
