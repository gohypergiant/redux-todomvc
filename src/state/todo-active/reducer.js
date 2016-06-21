import { handleActions } from 'redux-actions';
import { TODOS_EDIT } from '../todos/actions';

import {
  TODO_ACTIVE_SET,
  TODO_ACTIVE_REMOVE,
} from '../action-types';

const todoActive = handleActions({
  [TODO_ACTIVE_SET]: (state, { payload }) => payload,
  [TODO_ACTIVE_REMOVE]: () => null,
  [TODOS_EDIT]: () => null,
}, null);

export default todoActive;
