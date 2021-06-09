import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreInput extends Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          value={ value }
          onChange={ handler }
          data-testid="genre-input"
          className="select"
        >
          <option
            value="action"
            data-testid="genre-option"
          >
            Ação
          </option>

          <option
            value="comedy"
            data-testid="genre-option"
          >
            Comédia
          </option>

          <option
            value="thriller"
            data-testid="genre-option"
          >
            Suspense
          </option>

        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  handler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default GenreInput;
