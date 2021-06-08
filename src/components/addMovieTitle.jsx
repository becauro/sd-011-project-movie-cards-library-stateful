import React, { Component } from 'react';
import PropTypes from 'prop-types';

class addMovieTitle extends Component {
  render() {
    const { title, handleMovie } = this.props;
    return (
      <label htmlFor="titleId" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          id="titleId"
          type="text"
          name="title"
          value={ title }
          onChange={ handleMovie }
        />
      </label>
    );
  }
}

export default addMovieTitle;

addMovieTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleMovie: PropTypes.func.isRequired,
};
