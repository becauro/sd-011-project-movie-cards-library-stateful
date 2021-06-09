import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
  render() {
    const {
      name,
      label,
      inputTestId,
      labelTestId,
      value,
      handler,
      className,
    } = this.props;

    return (
      <label
        className="label"
        htmlFor={ name }
        data-testid={ labelTestId }
      >
        { label }
        <input
          className={ className }
          name={ name }
          type="text"
          value={ value }
          onChange={ handler }
          data-testid={ inputTestId }
        />
      </label>
    );
  }
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputTestId: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default InputText;
