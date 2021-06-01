/* eslint-disable max-lines-per-function */
import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      // genre: 'action',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title">
          Título
          <input
            type="text"
            value={ title }
            onChange={ this.handleInputChange }
            data-testid="title-input"
            name="title"
          />
        </label>

        <label
          data-testid="subtitle-input-label"
          htmlFor="subtitle"
        >
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            onChange={ this.handleInputChange }
            data-testid="subtitle-input"
            name="subtitle"
          />
        </label>

        <label
          data-testid="image-input-label"
          htmlFor="imagePath"
        >
          Imagem
          <input
            type="text"
            value={ imagePath }
            onChange={ this.handleInputChange }
            data-testid="image-input"
            name="imagePath"
          />
        </label>

        <label data-testid="storyline-input-label" htmlFor="storyline">
          Sinopse
          <textarea
            value={ storyline }
            onChange={ this.handleInputChange }
            name="storyline"
            data-testid="storyline-input"
          />
        </label>

        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.handleInputChange }
            data-testid="rating-input"
          />
        </label>
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
