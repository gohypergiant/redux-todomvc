import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import todos from './todos/reducer';
import visibilityFilter from './visibility-filter/reducer';

const reducers = combineReducers({
  todos,
  visibilityFilter,
});
const store = createStore(
  reducers,
  applyMiddleware(thunk, logger())
);

export default store;
