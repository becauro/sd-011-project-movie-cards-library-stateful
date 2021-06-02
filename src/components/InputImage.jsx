import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { state, func } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ state.imagePath }
          data-testid="image-input"
          onChange={ func.changeValue }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  state: PropTypes.string,
  func: PropTypes.func,
};

InputImage.defaultProps = {
  state: '',
  func: '',
};

export default InputImage;
