import { handleActions } from 'redux-actions';

import {
  TODOS_EDIT,
} from '../todos/actions';

const todoActive = handleActions({
  [TODO_ACTIVE_SET]: (state, { payload }) => payload,
  [TODOS_EDIT]: () => null,
}, null);

export default todoActive;
