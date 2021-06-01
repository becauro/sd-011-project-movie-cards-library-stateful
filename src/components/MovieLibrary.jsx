// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = props;

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.newMovie = this.newMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  onSearchTextChange(event) {
    const { movies } = this.props;
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      movies: movies.filter((movie) => movie.title.includes(value)
        || movie.subtitle.includes(value)
        || movie.storyline.includes(value)),
    });
  }

  onBookmarkedChange(event) {
    const { movies } = this.props;
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      movies: movies.filter((movie) => movie.bookmarked === true),
    });
  }

  onSelectedGenreChange(event) {
    const { movies } = this.props;
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      movies: (value !== '' ? movies.filter((movie) => movie.genre === value) : movies), // "" pois quando marcar em todos fica vazio o value.
    });
  }

  newMovie(newMovieInfos) {
    this.setState((estadoAnterior) => (
      { movies: [...estadoAnterior.movies, newMovieInfos] }));
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.newMovie } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
