import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  TODOS_ADD,
  TODOS_EDIT,
  TODOS_DELETE,
  TODOS_COMPLETE,
  TODOS_COMPLETE_ALL,
  TODOS_CLEAR_COMPLETE,
} from '../action-types';

const initialState = Immutable.List([{ // eslint-disable-line
  text: 'Use Redux',
  completed: false,
  id: 1,
}]);

const todos = handleActions({
  [TODOS_ADD]: (state, { payload }) =>
    state.push(Object.assign({}, payload, {
      id: Math.random(),
      completed: false,
    })),

  [TODOS_EDIT]: (state, { payload }) =>
    state
      .map(t => // eslint-disable-line
        t.id === payload.id ?
        Object.assing({}, t, { text: payload.text }) :
        t
      ),

  [TODOS_COMPLETE]: (state, { payload }) =>
    state
      .map(t => // eslint-disable-line
          t.id === payload ?
          Object.assign({}, t, { completed: !t.completed }) :
          t
      ),

  [TODOS_DELETE]: (state, { payload }) =>
    state.filter(t => t.id !== payload),

  [TODOS_COMPLETE_ALL]: state => {
    const allComplete = state.every(t => t.completed);

    return state.map(t =>
      Object.assign({}, t, {
        completed: !allComplete,
      })
    );
  },

  [TODOS_CLEAR_COMPLETE]: state =>
    state.filter(t => t.completed === false),

}, initialState);

export default todos;
