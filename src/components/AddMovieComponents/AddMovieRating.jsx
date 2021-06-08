import React, { Component } from 'react';

class AddMovieRating extends Component {
  render() {
    const { rating, onRatingNumberChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          value={ rating }
          onChange={ onRatingNumberChange }
          step={ 0.1 }
          max={ 5 }
          min={ 0 }
        />
      </label>
    );
  }
}

export default AddMovieRating;
