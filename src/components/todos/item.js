import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Input from '../input';

const Item = ({
  todo,
  isActive,
  editTodo,
  completeTodo,
  updateTodo,
  deleteTodo,
}) =>
  <li
    className={classnames({
      completed: todo.completed,
      editing: isActive,
    })}
  >
    {isActive ?
      <Input
        saveOnBlur
        text={todo.text}
        isActive={isActive}
        onSave={updateTodo}
      />
    :
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={completeTodo}
        />
        <label onDoubleClick={editTodo}>{todo.text}</label>
        <button
          className="destroy"
          onClick={deleteTodo}
        />
      </div>
    }
  </li>;

Item.propTypes = {
  todo: PropTypes.object,
  isActive: PropTypes.bool,
  editTodo: PropTypes.func,
  completeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export default Item;
