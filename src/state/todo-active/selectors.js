import { createSelector } from 'reselect';

export const getActiveTodo = createSelector(
  state => state.todoActive,
  active => active
);
