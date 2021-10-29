import { ActionType } from '../ActionTypes';
import axios from 'axios';

const baseURL = 'https://todos.d.simpleinfo.tw/api';

const axiosConfig = {
  headers: {
    'api-key': '78bba90a-c22a-405e-a617-9abc07a9c3db',
  },
};

export const get_todos = () => {
  return async (dispatch) => {
    dispatch(set_loading(true));

    const result = await axios.get(`${baseURL}/todos`, axiosConfig);
    dispatch({
      type: ActionType.GET_TODO,
      payload: result.data,
    });

    dispatch(set_loading(false));
  };
};

export const add_todo = (content) => {
  const req = {
    content,
    is_done: false,
  };
  return async (dispatch) => {
    dispatch(set_loading(true));

    const result = await axios.post(`${baseURL}/todos`, req, axiosConfig);
    dispatch({
      type: ActionType.ADD_TOO,
      payload: {
        id: result.data.id,
        content: result.data.content,
        is_done: false,
      },
    });

    dispatch(set_loading(false));
  };
};

export const update_todo = (item) => {
  return async (dispatch) => {
    dispatch(set_loading(true));
    const result = await axios.post(
      `${baseURL}/todos/${item.id}`,
      item,
      axiosConfig
    );
    dispatch({
      type: ActionType.UPDATE_TODO,
      payload: {
        id: result.data.id,
        content: result.data.content,
        is_done: result.data.is_done,
      },
    });
    dispatch(set_loading(false));
  };
};

export const delete_todo = (id) => {
  return async (dispatch) => {
    dispatch(set_loading(true));
    await axios.delete(`${baseURL}/todos/${id}`, axiosConfig);
    dispatch({
      type: ActionType.DELETE_TODO,
      payload: id,
    });
    dispatch(set_loading(false));
  };
};

export const set_loading = (loading) => {
  return {
    type: ActionType.SET_LOADING,
    payload: loading,
  };
};
