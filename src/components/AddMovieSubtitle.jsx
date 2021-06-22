import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovieSubtitle extends Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label htmlFor="add-movie-subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          id="add-movie-subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
