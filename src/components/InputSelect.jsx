import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSelect extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}
InputSelect.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
};
InputSelect.defaultProps = {
  handleChange: () => {},
  value: 'action',
};
export default InputSelect;
