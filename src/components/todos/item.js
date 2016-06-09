import React, { PropTypes } from 'react';

const Item = ({
  todo,
  completeTodo,
  deleteTodo,
}) =>
  <li>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={completeTodo}
      />
      <label>{todo.text}</label>
      <button
        className="destroy"
        onClick={deleteTodo}
      />
    </div>
  </li>;

Item.propTypes = {
  todo: PropTypes.object,
};

export default Item;
