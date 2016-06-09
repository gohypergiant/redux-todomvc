import { createSelector } from 'reselect';

export const getVisibilityFilter = createSelector(
  state => state.visibilityFilter,
  filter => filter
);
