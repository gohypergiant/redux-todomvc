import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text || '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit(e) {
    if (e.which === 13) {
      this.props.onSave(e.target.value);

      if (this.props.resetOnSave) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (this.props.saveOnBlur) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <input
        type="text"
        autoFocus
        value={this.state.text}
        className={classnames({
          edit: this.props.isActive,
          'new-todo': this.props.resetOnSave,
        })}
        placeholder={this.props.placeholder}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default Input;
