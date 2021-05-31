import React from 'react';
import PropTypes from 'prop-types';
import GenderSelect from './GenderSelect';

class SearchBar extends React.Component {
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
        <label
          data-testid="text-input-label"
          htmlFor="input"
        >
          Inclui o texto:
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            name="searchBar"
            data-testid="text-input"
            placeholder="Search..."
          />
        </label>
        <br />
        <label
          data-testid="checkbox-input-label"
          htmlFor="checkbox-input"
        >
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            value={ searchText }
            name="searchBar"
            data-testid="checkbox-input"
            placeholder="Search..."
          />
        </label>
        <GenderSelect
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ onSelectedGenreChange }
        />

      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,

};

export default SearchBar;
