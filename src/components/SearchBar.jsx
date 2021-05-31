import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <div>
          <label name="search" htmlFor="input-filter">
            Inclui o texto:
            <input
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              data-testid="text-input"
              id="input-filter"
            />
          </label>
        </div>
        <div>
          <label name="favorite" htmlFor="checkbox">
            Mostrar somente favoritos
            <input
              onChange="onBookmarkedChange"
              checked=""
              type="checkbox"
              id="checkbox"
              data-testid="checkbox-input"
            />
          </label>
        </div>
        <div>
          <label name="genre" htmlFor="genre" data-testid="select-option">
            Filtrar por gênero
            <select data-testid="select-input" value={ selectedGenre }>
              <option selected value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
            </select>
          </label>
        </div>
      </form>
    );
  }
}

export default SearchBar;
