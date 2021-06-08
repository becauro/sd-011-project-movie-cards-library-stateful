import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const {
      labelText,
      dataTestId,
      name,
      value,
      onChange,
    } = this.props;
    return (
      <label
        htmlFor={ name }
        data-testid={ `${dataTestId}-label` }
      >
        { labelText }
        <textarea
          id={ name }
          name={ name }
          value={ value }
          onChange={ onChange }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  labelText: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;
