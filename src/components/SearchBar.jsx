import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="search-text" data-testid="text-input-label">
          Inclui o texto:
          <input type="text" name="search-text" data-testid="text-input" value={ searchText } onChange={ onSearchTextChange } />
        </label>
        <label htmlFor="favoritos" data-testid="checkbox-input-label">
          Mostrar somente favoritos:
          <input type="checkbox" name="favoritos" data-testid="checkbox-input" checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        </label>
        <label htmlFor="genre">
          Filtrar por gênero:
          <select name="genre" data-testid="select-input" value={ selectedGenre } onChange={ onSelectedGenreChange }>
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
