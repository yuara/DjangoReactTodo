import axios from 'axios';
import { reset } from 'redux-form';
import history from '../history';
import { GET_TODOS, GET_TODO, ADD_TODO, DELETE_TODO } from './types';

// GET TODOS
export const getTodos = () => async dispatch => {
  const res = await axios.get('/api/todos/');
  dispatch({
    type: GET_TODOS,
    payload : res.data
  });
};

// GET TODOS
export const getTodo = id => async dispatch => {
  const res = await axios.get(`/api/todos/${id}/`);
  dispatch({
    type: GET_TODO,
    payload: res.data
  });
};

// ADD TODO
export const addTodo = formValues => async dispatch => {
  const res = await axios.post('/api/todos', { ... formValues });
  dispatch({
    type: ADD_TODO,
    payload: res.data
  });
  dispatch(reset('todoForm'));
};

// DELETE TODO
export const deleteTodo = id => async dispatch => {
  await axios.delete(`/api/todos/${id}/`);
  dispatch({
    type: DELETE_TODO,
    payload: id
  });
  history.push('/');
}
