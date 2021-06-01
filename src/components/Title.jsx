import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <label
          htmlFor="title"
          data-testid="title-input-label"
        >
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title"
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

Title.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Title;
