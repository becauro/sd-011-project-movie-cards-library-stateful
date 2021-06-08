import React, { Component } from 'react';
import FormInput from './FormInput';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.renderFormInput = this.renderFormInput.bind(this);
  }

  onChangeHandle({ target }) {
    const { id, value } = target;

    this.setState({
      [id]: value,
    });
  }

  renderFormInput(labelText, id, type, value) {
    return (
      <FormInput
        labelTestId={ `${id}-input-label` }
        labelText={ labelText }
        id={ id !== 'image' ? id : 'imagePath' }
        type={ type }
        value={ value }
        onChangeCallback={ this.onChangeHandle }
        inputTestId={ `${id}-input` }
      />
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          { this.renderFormInput('Título', 'title', 'text', title)}
          { this.renderFormInput('Subtítulo', 'subtitle', 'text', subtitle) }
          { this.renderFormInput('Imagem', 'image', 'text', imagePath) }

          <label htmlFor="storyline" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="storyline"
              value={ storyline }
              data-testid="storyline-input"
              onChange={ this.onChangeHandle }
            />
          </label>

          { this.renderFormInput('Avaliação', 'rating', 'number', rating) }

          <label data-testid="genre-input-label" htmlFor="genre">
            Gênero
            <select
              id="genre"
              data-testid="genre-input"
              value={ genre }
              onChange={ this.onChangeHandle }
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default AddMovie;
