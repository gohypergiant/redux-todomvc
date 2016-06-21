import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import todos from './todos/reducer';
import todoActive from './todo-active/reducer';
import visibilityFilter from './visibility-filter/reducer';
import { Iterable } from 'immutable';

import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

const reducers = combineReducers({
  todos,
  todoActive,
  visibilityFilter,
});

const logger = createLogger({
  timestamp: false,
  duration: false,
  stateTransformer: state => {
    const newState = {};

    for (const i of Object.keys(state)) {
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }

    return newState;
  },
});

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
);

export default store;
