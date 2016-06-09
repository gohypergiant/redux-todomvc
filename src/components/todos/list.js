import React, { PropTypes } from 'react';
import Item from './item-container';

const TodosList = ({
  todos,
  active,
  onCompleteAll,
}) =>
  <section className="main">
    {todos.count() > 0 &&
      <input
        className="toggle-all"
        type="checkbox"
        checked={!active}
        onChange={onCompleteAll}
      />
    }
    <ul className="todo-list">
      {todos.map(todo =>
        <Item
          key={todo.id}
          todo={todo}
        />
      )}
    </ul>
  </section>;

TodosList.propTypes = {
  todos: PropTypes.object,
};

export default TodosList;
