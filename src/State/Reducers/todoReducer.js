import { ActionType } from '../ActionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ActionType.GET_TODO:
      newState = { ...state, todos: action.payload };
      return action.payload;

    case ActionType.ADD_TOO:
      const { id, content, is_done } = action.payload;
      return [...state, { id, content, is_done }];

    case ActionType.UPDATE_TODO:
      newState = JSON.parse(JSON.stringify(state));
      newState.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.content = action.payload.content;
          todo.is_done = action.payload.is_done;
        }
      });
      return newState;
    case ActionType.DELETE_TODO:
      newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    default:
      return state;
  }
};

export default reducer;
