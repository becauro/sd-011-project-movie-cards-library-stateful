import React, { Component } from 'react';

export default class SelecetLabel extends Component {
  render() {
    const { func, value } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          value={ value }
          data-testid="genre-input"
          name="genre"
          onChange={ func }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}
