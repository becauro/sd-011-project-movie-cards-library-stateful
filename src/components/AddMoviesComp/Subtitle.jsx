import React, { Component } from 'react';
import PropTypes from 'prop-types';
// aqui sao os componentes criados devido a ficar muito grande o render do AddMovies todos são filhos dele, recebem via props os dados e a função handleChange para controlar o estado
// todos possuem validação da props via proptype
// todos tem data-testids para validação dos testes
class Subtitle extends Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

export default Subtitle;

Subtitle.propTypes = {
  subtitle: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;
