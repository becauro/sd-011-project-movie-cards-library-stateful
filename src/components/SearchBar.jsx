// Requisito realizado com consultas aos sites:
// https://www.youtube.com/watch?v=99cWTot8bFc
// https://stackoverflow.com/questions/12894169/what-is-the-html-for-attribute-in-label
// https://app.betrybe.com/course/live-lectures/sd-cohort-8#aula-122-formularios-em-react
// https://reactjs.org/docs/forms.html
// Sala de estudos com o colega Nykolas Silva
import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form data-testid="search-bar-form">
          <label htmlFor="onSearchTextChange" data-testid="text-input-label">
            Inclui o texto:
            <input
              data-testid="text-input"
              type="text"
              value={ searchText }
              onChange={ onSearchTextChange }
              name="onSearchTextChange"
              id="onSearchTextChange"
            />
          </label>

          <label htmlFor="bookmarkedOnly" data-testid="checkbox-input-label">
            Mostrar somente favoritos
            <input
              data-testid="checkbox-input"
              type="checkbox"
              checked={ bookmarkedOnly }
              onChange={ onBookmarkedChange }
              name="bookmarkedOnly"
              id="bookmarkedOnly"
            />
          </label>

          <label htmlFor="select-input" data-testid="select-input-label">
            Filtrar por gênero
            <select
              value={ selectedGenre }
              onChange={ onSelectedGenreChange }
              checked={ bookmarkedOnly }
              data-testid="select-input"
            >
              <option value="" data-testid="select-option">Todos</option>
              <option value="action" data-testid="select-option">Ação</option>
              <option value="comedy" data-testid="select-option">Comédia</option>
              <option value="thriller" data-testid="select-option">Suspense</option>
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

// SearchBar.defaultProps = {
//   searchText: '',
//   onSearchTextChange: '',
//   bookmarkedOnly: '',
//   onBookmarkedChange: '',
//   selectedGenre: '',
//   onSelectedGenreChange: '',
// };

export default SearchBar;
