// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({target}) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input
              type="text"
              value={ this.state.title }
              name='title'
              onChange={this.changeHandler}
              data-testid="title-input"
            />
          </label>

          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input
              type="text"
              value={ this.state.subtitle }
              name='subtitle'
              onChange={this.changeHandler}
              data-testid="subtitle-input"
            />
          </label>

          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input
              type="text"
              value={ this.state.imagePath }
              name='imagePath'
              onChange={this.changeHandler}
              data-testid="image-input"
            />
          </label>

          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <textarea
              value={ this.state.storyline }
              name='storyline'
              onChange={this.changeHandler}
              data-testid="storyline-input"
            />
          </label>
        </form>
      </div>
    );
  }
}

// AddMovie.propTypes = {

// };

export default AddMovie;