import { connect } from 'react-redux';
import Item from './item';

import {
  completeTodo,
  deleteTodo,
} from '../../state/todos/actions';

const ItemContainer = connect(
  undefined,
  (dispatch, { todo }) => ({
    completeTodo() {
      dispatch(completeTodo(todo.id));
    },
    deleteTodo() {
      dispatch(deleteTodo(todo.id));
    },
  })
)(Item);

export default ItemContainer;
