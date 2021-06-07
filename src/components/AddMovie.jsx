import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import Title from './Title';
import Storyline from './Storyline';
import BtnAddMovie from './BtnAddMovie';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.addMovieFunction = this.addMovieFunction.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  addMovieFunction(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { title, subtitle,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title addMovieFunction={ this.addMovieFunction } value={ title } />
        <Subtitle addMovieFunction={ this.addMovieFunction } value={ subtitle } />
        <label data-testid="image-input-label" htmlFor="imagePath">
          Imagem
          <input
            type="text"
            id="imagePath"
            data-testid="image-input"
            onChange={ this.addMovieFunction }
            value={ imagePath }
          />
        </label>
        <Storyline addMovieFunction={ this.addMovieFunction } value={ storyline } />
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação
          <input
            type="number"
            id="rating"
            data-testid="rating-input"
            onChange={ this.addMovieFunction }
            value={ rating }
          />
        </label>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            onChange={ this.addMovieFunction }
            id="genre"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
        <BtnAddMovie resetState={ this.resetState } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
