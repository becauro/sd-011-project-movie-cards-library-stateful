import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.addMovies = this.addMovies.bind(this);
    this.filtro = this.filtro.bind(this);
    this.handleSeachBar = this.handleSeachBar.bind(this);
  }

  handleSeachBar({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  addMovies(movie) {
    this.setState((estadoAnterior) => ({
      movies: [...estadoAnterior.movies, movie],
    }));
  }

  filtro() {
    const { bookmarkedOnly, searchText, selectedGenre, movies } = this.state;
    let newArray = movies;
    if (bookmarkedOnly === true) {
      newArray = movies.filter((movie) => movie.bookmarked === true);
    }

    if (searchText !== '') {
      newArray = movies.filter((movie) => movie.title
        .toLowerCase().includes(searchText)
        || movie.subtitle.toLowerCase().includes(searchText)
        || movie.storyline.toLowerCase().includes(searchText));
    }

    if (selectedGenre !== '') {
      newArray = movies.filter((movie) => movie.genre === selectedGenre);
    }

    return newArray;
  }

  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
      filtro
    } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleSeachBar }
          onBookmarkedChange={ this.handleSeachBar }
          onSelectedGenreChange={ this.handleSeachBar }
        />
        <MovieList movies={ this.filtro() } />
        <AddMovie onClick={ this.addMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf,
};

MovieLibrary.defaultProps = {
  movies: {},
};

export default MovieLibrary;
