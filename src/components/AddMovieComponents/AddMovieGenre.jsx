import React, { Component } from 'react';

class AddMovieGenre extends Component {
  render() {
    const { genre, onGenreChange } = this.props;
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genre }
          onChange={ onGenreChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default AddMovieGenre;
