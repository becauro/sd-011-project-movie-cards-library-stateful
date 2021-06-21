import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { rating, handleChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="textFive">
        Avaliação
        <input
          data-testid="rating-input"
          id="textFive"
          type="number"
          name="rating"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  handleChange: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
};

export default Avaliacao;
