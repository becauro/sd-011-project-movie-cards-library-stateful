import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class StoryLineInput extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label
        htmlFor="storyline-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyLine"
          value={ value }
          onChange={ handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

StoryLineInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};