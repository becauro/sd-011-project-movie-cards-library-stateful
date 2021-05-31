import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    // , bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange
    return (
      <form data-testid="search-bar-form">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
        <label data-testid="text-input-label">
          Inclui o texto:
        </label>
        <input
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func
};

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: 'undefined'
};

export default SearchBar;
