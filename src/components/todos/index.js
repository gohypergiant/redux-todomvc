import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import List from './list';

import {
  getVisibleTodos,
  getActiveCount,
} from '../../state/todos/selectors';

import {
  completeAllTodos,
} from '../../state/todos/actions';

const TodosContainer = connect(
  createSelector(
    getVisibleTodos,
    getActiveCount,
    (todos, active, completed) => ({
      todos,
      active,
      completed,
    })
  ),
  dispatch => ({
    onCompleteAll() {
      dispatch(completeAllTodos());
    },
  })
)(List);

export default TodosContainer;
