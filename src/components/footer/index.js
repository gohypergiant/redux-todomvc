import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Footer from './footer';

import {
  getActiveCount,
  getCompletedCount,
} from '../../state/todos/selectors';

import {
  clearCompleteTodos,
} from '../../state/todos/actions';

const FooterContainer = connect(
  createSelector(
    getCompletedCount,
    getActiveCount,
    (completed, active) => ({
      completed,
      active,
    })
  ),
  dispatch => ({
    onClearCompleted() {
      dispatch(clearCompleteTodos());
    },
  })
)(Footer);

export default FooterContainer;
