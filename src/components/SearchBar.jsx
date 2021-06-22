import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="text1" data-testid="text-input-label">
            Inclui o texto:
            <input
              id="text1"
              name="searchText"
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
            />
          </label>
          <label htmlFor="text2" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              id="text2"
              name="bookmarkedOnly"
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
            />
          </label>
          <label htmlFor="text3" data-testid="select-input-label">
            Filtrar por gênero
            <select
              id="text3"
              data-testid="select-input"
              name="selectedGenre"
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
            >
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
