import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const {
      value,
      handlerChange,
    } = this.props;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handlerChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  value: PropTypes.number.isRequired,
  handlerChange: PropTypes.func.isRequired,
};

export default Title;
