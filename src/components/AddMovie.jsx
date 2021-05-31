import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super()
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const value = ( target.type === 'checkbox' ) ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    })
  }

  render() {
    const { onClick } = this.props;

    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            <span>Título</span>

            <input
              type="text"
              name="title"
              value={ this.state.title }
              onChange={ this.handleChange }
              data-testid="title-input"
            />

          </label>

          {/* <br /> provisório */}
          <br />

          <label data-testid="subtitle-input-label">
            <span>Subtítulo</span>

            <input
              type="text"
              name="subtitle"
              value={ this.state.subtitle }
              onChange={ this.handleChange }
              data-testid="subtitle-input"
            />

          </label>

          {/* <br /> provisório */}
          <br />

          <label data-testid="image-input-label">
            <span>Imagem</span>

            <input
              type="text"
              name="imagePath"
              value={ this.state.imagePath }
              onChange={ this.handleChange }
              data-testid="image-input"
            />

          </label>

          {/* <br /> provisório */}
          <br />

          <label data-testid="storyline-input-label">
            <span>Sinopse</span>

            <textarea
              name="storyline"
              value={ this.state.storyline }
              onChange={ this.handleChange }
              data-testid="storyline-input"
            />

          </label>

          {/* <br /> provisório */}
          <br />

          <label data-testid="rating-input-label">
            <span>Avaliação</span>

            <input
              type="number"
              name="rating"
              value={ this.state.rating }
              onChange={ this.handleChange }
              data-testid="rating-input"
            />

          </label>

          {/* <br /> provisório */}
          <br />

          <label data-testid="genre-input-label">
            <span>Gênero</span>

            <select
              name="genre"
              value={ this.state.genre }
              onChange={ this.handleChange }
              data-testid="genre-input"
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>

          </label>

        </form>
      </div>
    );
  }
}

export default AddMovie;
