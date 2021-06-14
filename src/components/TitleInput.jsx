import React from 'react';
import PropTypes from 'prop-types';

class TitleInput extends React.Component {
  render() {
    const { funcValue, stateValue } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          onChange={ funcValue }
          type="text"
          data-testid="title-input"
          value={ stateValue }
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  funcValue: PropTypes.func.isRequired,
  stateValue: PropTypes.string.isRequired,
};

export default TitleInput;
