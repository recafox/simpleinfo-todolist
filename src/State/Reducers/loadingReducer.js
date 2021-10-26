import { ActionType } from '../ActionTypes';

const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
