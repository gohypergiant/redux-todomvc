import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Item from './item';

import {
  editTodo,
  completeTodo,
  deleteTodo,
} from '../../state/todos/actions';

import {
  setActiveTodo,
  removeActiveTodo,
} from '../../state/todo-active/actions';

import {
  getActiveTodo,
} from '../../state/todo-active/selectors';

const ItemContainer = connect(
  createSelector(
    getActiveTodo,
    (state, { todo }) => todo.id,
    (todoId, activeId) => ({
      isActive: activeId === todoId,
    })
  ),
  (dispatch, { todo }) => ({
    completeTodo() {
      dispatch(completeTodo(todo.id));
    },
    deleteTodo() {
      dispatch(deleteTodo(todo.id));
    },
    updateTodo(text) {
      dispatch(removeActiveTodo());
      dispatch(editTodo({
        id: todo.id,
        text,
      }));
    },
    editTodo() {
      dispatch(setActiveTodo(todo.id));
    },
  })
)(Item);

export default ItemContainer;
