import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,

};
