import { createAction } from 'redux-actions';

import {
  TODOS_ADD,
  TODOS_EDIT,
  TODOS_DELETE,
  TODOS_COMPLETE,
  TODOS_COMPLETE_ALL,
  TODOS_CLEAR_COMPLETE,
} from '../action-types';

export const addTodo = createAction(TODOS_ADD);
export const deleteTodo = createAction(TODOS_DELETE);
export const editTodo = createAction(TODOS_EDIT);
export const completeTodo = createAction(TODOS_COMPLETE);
export const completeAllTodos = createAction(TODOS_COMPLETE_ALL);
export const clearCompleteTodos = createAction(TODOS_CLEAR_COMPLETE);
