import { ActionType } from '../ActionTypes';

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ActionType.GET_TODO:
      newState = { ...state, todos: action.payload };
      return newState;

    case ActionType.ADD_TOO:
      newState = JSON.parse(JSON.stringify(state));
      newState.todos.push({
        id: action.payload.id,
        content: action.payload.content,
        is_done: action.payload.is_done,
      });
      return newState;

    case ActionType.UPDATE_TODO:
      newState = JSON.parse(JSON.stringify(state));
      newState.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.content = action.payload.content;
          todo.is_done = action.payload.is_done;
        }
      });
      return newState;
    case ActionType.DELETE_TODO:
      newState = JSON.parse(JSON.stringify(state));
      let filtered = newState.todos.filter(
        (todo) => todo.id !== action.payload
      );
      newState.todos = filtered;
      return newState;
    default:
      return state;
  }
};

export default reducer;
