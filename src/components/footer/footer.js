import React, { PropTypes } from 'react';
import Filter from './filter-container';

import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../../state/visibility-filter/constants';

const Footer = ({
  onClearCompleted,
  completed,
  active,
}) =>
  <div className="footer">
    <span className="todo-count">
      <strong>{active}</strong> {active === 1 ? 'item' : 'items'} left
    </span>
    <ul className="filters">
      <Filter
        filter={SHOW_ALL}
        title="All"
      />
      <Filter
        filter={SHOW_ACTIVE}
        title="Active"
      />
      <Filter
        filter={SHOW_COMPLETED}
        title="Completed"
      />
    </ul>
    {completed > 0 &&
      <button
        onClick={onClearCompleted}
        type="button"
        className="clear-completed"
      >
        Clear completed
      </button>
    }
  </div>;

Footer.propTypes = {
  completed: PropTypes.number,
  active: PropTypes.number,
  onClearCompleted: PropTypes.func,
};

export default Footer;
