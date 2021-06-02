import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MoviesInputText extends Component {
  render() {
    const { titleValue, subtitleValue, imageValue, onchange } = this.props;
    return (
      <>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            id="title"
            name="title"
            type="text"
            value={ titleValue }
            data-testid="title-input"
            onChange={ onchange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitle"
            name="subtitle"
            type="text"
            value={ subtitleValue }
            data-testid="subtitle-input"
            onChange={ onchange }
          />
        </label>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            name="imagePath"
            type="text"
            value={ imageValue }
            data-testid="image-input"
            onChange={ onchange }
          />
        </label>
      </>
    );
  }
}

MoviesInputText.propTypes = {
  titleValue: PropTypes.string.isRequired,
  subtitleValue: PropTypes.string.isRequired,
  imageValue: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
};
