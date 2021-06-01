import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChange }
        />
        Avaliação
      </label>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rating;