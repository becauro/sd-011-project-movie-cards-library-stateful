import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { func, name } = this.props;
    return (
      <button type="submit" onClick={ func }>{ name }</button>
    );
  }
}
