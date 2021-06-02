import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {
  render() {
    const { state, func } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          cols="30"
          rows="10"
          name="storyline"
          value={ state }
          data-testid="storyline-input"
          onChange={ func }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  state: PropTypes.string,
  func: PropTypes.objectOf(),
};

InputStoryline.defaultProps = {
  state: '',
  func: '',
};

export default InputStoryline;
