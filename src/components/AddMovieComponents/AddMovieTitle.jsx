import React, { Component } from 'react';

class AddMovieTitle extends Component {
  render() {
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          name="title"
        />
      </label>
    );
  }
}

export default AddMovieTitle;
