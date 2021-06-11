// implement AddMovie component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange({ target }) {
    const { name, value, type } = target;
    const newValue = type === 'number' ? +value : value;
    this.setState({ [name]: newValue });
  }

  handleClear() {
    const { onClick } = this.props;
    this.setState({ ...initialState });
    onClick();
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputSubTitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          id="subtitle-input"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          id="image-input"
          data-testid="image-input"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputStoryline() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          id="rating-input"
          data-testid="rating-input"
          value={ rating }
          onChange={ this.handleChange }
        />
      </label>
    );
  }

  inputGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  inputButton() {
    return (
      <button
        type="button"
        onClick={ this.handleChange }
        data-testid="send-button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <div>
        <p>Add Movie</p>
        <form data-testid="add-movie-form">
          { this.inputTitle()}
          { this.inputSubTitle()}
          { this.inputImage()}
          { this.inputStoryline()}
          { this.inputRating()}
          { this.inputGenre()}
          { this.inputButton() }
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
