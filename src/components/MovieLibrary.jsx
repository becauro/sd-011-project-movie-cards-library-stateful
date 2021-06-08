// implement AddMovie component here
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
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    this.setState({
      searchText: value,
      movies: movies.filter((movie) => {
        const { title, subtitle, storyline } = movie;
        return `${title} ${subtitle} ${storyline}`.includes(value);
      }),
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    const { movies } = this.props;
    this.setState({
      bookmarkedOnly: checked,
      movies: checked ? movies.filter((movie) => movie.bookmarked) : movies,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    const { movies } = this.props;
    this.setState({
      selectedGenre: value,
      movies: value ? movies.filter((movie) => movie.genre === value) : movies,
    });
  }

  /**
   * Consultei o repositório do Luiz Wendel para resolver a função addMovie.
   * link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/7
   */
  addMovie(state) {
    this.setState((previousState) => ({
      movies: [
        ...previousState.movies,
        state,
      ],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
