import { connect } from 'react-redux';
import { addTodo } from '../../state/todos/actions';
import Header from './header';

const HeaderContainer = connect(
  null,
  dispatch => ({
    onSave(text) {
      if (text.length > 0) {
        dispatch(addTodo({ text }));
      }
    },
  })
)(Header);

export default HeaderContainer;
