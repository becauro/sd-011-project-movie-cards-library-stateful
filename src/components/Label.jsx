import React, { Component } from 'react';

class Label extends Component {
  render() {
    const { data, value, name, nameInput, dataInput, func } = this.props;
    return (
      <label data-testid={ data } htmlFor={ nameInput }>
        {name}
        <input
          type="text"
          value={ value }
          name={ nameInput }
          data-testid={ dataInput }
          onChange={ func }
        />
      </label>
    );
  }
}

export default Label;
