import React, { PropTypes } from 'react';
import Input from '../input';

const Header = ({ onSave }) =>
  <header className="header">
    <h1>todos</h1>
    <Input
      resetOnSave
      onSave={onSave}
      placeholder="What needs to be done?"
    />
  </header>;

export default Header;
