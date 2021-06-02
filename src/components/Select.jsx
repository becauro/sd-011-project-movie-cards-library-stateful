import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { onChange, genre, name } = this.props;
    return (
      <label htmlFor="i2" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name={ name }
          value={ genre }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}
export default Select;

Select.propTypes = {
  genre: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
