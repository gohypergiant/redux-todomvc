import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Filter = ({
  title,
  active,
  onClick,
}) =>
  <li>
    <a
      href="#"
      onClick={onClick}
      className={classnames({ selected: active })}
    >
      {title}
    </a>
  </li>;

Filter.propTypes = {
  title: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Filter;
