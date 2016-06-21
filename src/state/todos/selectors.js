import { createSelector } from 'reselect';
import { getVisibilityFilter } from '../visibility-filter/selectors';


import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../visibility-filter/constants';

export const getAllTodos = createSelector(
  state => state.todos,
  todos => todos
);

export const getAllCount = createSelector(
  getAllTodos,
  todos => todos.count()
);

export const getCompletedCount = createSelector(
  getAllTodos,
  todos => todos.filter(t => t.completed).count()
);

export const getActiveCount = createSelector(
  getAllCount,
  getCompletedCount,
  (todos, completed) => todos - completed
);

export const getVisibleTodos = createSelector(
  getAllTodos,
  getVisibilityFilter,
  (todos, filter) => {
    switch (filter) {
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed);

      case SHOW_COMPLETED:
        return todos.filter(t => t.completed);

      case SHOW_ALL:
      default:
        return todos;
    }
  }
);
