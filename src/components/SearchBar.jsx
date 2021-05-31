import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    const { searchText, onSearchTextChange, bookmarkedOnly, } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>
      </form>
    );
  }
}

export default SearchBar;
