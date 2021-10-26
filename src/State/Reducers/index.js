import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import loadingReducer from './loadingReducer';

const reducers = combineReducers({
  todos: todoReducer,
  loading: loadingReducer,
});

export default reducers;
