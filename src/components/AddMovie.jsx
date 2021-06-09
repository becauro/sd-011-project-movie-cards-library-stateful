import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <div>
        x
        <form data-testid="add-movie-form">
          <Title value={ title } handleChange={ this.handleChange } />
          <Subtitle value={ subtitle } handleChange={ this.handleChange } />
          <ImagePath value={ imagePath } handleChange={ this.handleChange } />
          <StoryLine value={ storyLine } handleChange={ this.handleChange } />

          <label data-testid="rating-input-label" htmlFor="rating-input">
            Avaliação
            <input
              data-testid="rating-input"
              name="rating"
              type="text"
              value={ rating }
              onChange={ this.handleChange }
            />
          </label>
          <label data-testid="genre-input-label" htmlFor="genre-input">
            Gênero
            <select
              name="genre"
              value={ genre }
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

AddMovie.propTypes = {
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
