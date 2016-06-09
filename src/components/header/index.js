import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Header from './header';
import { addTodo } from '../../state/todos/actions';

import {
  getActiveCount,
  getCompletedCount,
} from '../../state/todos/selectors';

const HeaderContainer = connect(
  createSelector(
    getCompletedCount,
    getActiveCount,
    (completed, active) => ({
      completed,
      active,
    })
  ),
  dispatch => ({
    onSave(text) {
      if (text.length > 0) {
        dispatch(addTodo({ text }));
      }
    },
  })
)(Header);

export default HeaderContainer;
