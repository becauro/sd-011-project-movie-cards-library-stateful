import React, { Component } from 'react';

class AddMovieTitle extends Component {
  render() {
    const { title, onTitleTextChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
          value={ title }
          onChange={ onTitleTextChange }
        />
      </label>
    );
  }
}

export default AddMovieTitle;
