import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  render() {
    const { searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="text-input-label" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="checkbox-input-label" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </form>
    );
  }
}

Searchbar.propTypes = ({
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.string,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.bool,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.string,
}).isRequired;

export default Searchbar;
