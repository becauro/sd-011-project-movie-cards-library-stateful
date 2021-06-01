import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovieSubtitle from './AddMovieSubtitle';
import AddMovieImage from './AddMovieImage';
import AddMovieStoryline from './AddMovieStoryline';
import AddMovieRating from './AddMovieRating';
import AddMovieGenre from './AddMovieGenre';

export default class AddMovie extends Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <label htmlFor="input-title" data-testid="title-input-label">
            Título
            <input
              type="text"
              name="title"
              id="input-title"
              value={ title }
              onChange={ this.handleChange }
              data-testid="title-input"
            />
          </label>
          <AddMovieSubtitle value={ subtitle } handleChange={ this.handleChange } />
          <AddMovieImage value={ imagePath } handleChange={ this.handleChange } />
          <AddMovieStoryline value={ storyline } handleChange={ this.handleChange } />
          <AddMovieRating value={ rating } handleChange={ this.handleChange } />
          <AddMovieGenre value={ genre } handleChange={ this.handleChange } />
        </form>

      </section>
    );
  }
}
