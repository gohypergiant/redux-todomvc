import { createAction } from 'redux-actions';

import {
  TODO_ACTIVE_SET,
  TODO_ACTIVE_REMOVE,
} from '../action-types';

export const setActiveTodo = createAction(TODO_ACTIVE_SET);
export const removeActiveTodo = createAction(TODO_ACTIVE_REMOVE);
