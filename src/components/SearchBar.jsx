import React from 'react';

class SearchBar extends React.Component {
    render() {
        const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
        return (
            <fieldset>
                <form data-testid="search-bar-form">
                    <label data-testid="text-input-label">
                    Inclui o texto:
                    <input
                    data-testid="text-input"
                    value={searchText}
                    onChange={onSearchTextChange}
                    />
                    </label>
                </form>
            </fieldset>
        )
    }
}

export default SearchBar;