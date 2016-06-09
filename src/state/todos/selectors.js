import { createSelector } from 'reselect';

import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../visibility-filter/constants';

import {
  getVisibilityFilter,
} from '../visibility-filter/selectors';

export const getAllTodos = createSelector(
  state => state.todos,
  todos => todos
);

export const getCompletedCount = createSelector(
  getAllTodos,
  todos => todos.filter(t => t.completed).count()
);

export const getActiveCount = createSelector(
  getAllTodos,
  getCompletedCount,
  (todos, completed) => todos.count() - completed
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
