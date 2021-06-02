import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { change, value } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          onChange={ change }
          name="genre"
          value={ value }
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

export default Select;