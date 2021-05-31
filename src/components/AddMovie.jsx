// implement AddMovie component here

import React, { Component } from 'react'

export default class AddMovie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    }
    this.handleState = this.handleState.bind(this)
  }

  handleState({target}) {
    const {value, name} = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    const {onClick} = this.props
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">Título
          <input type="text" value={this.state.title} data-testid="title-input" id="title-input" name="title" onChange={this.handleState}/>
        </label>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">Subtítulo
          <input type="text" value={this.state.subtitle} data-testid="subtitle-input" id="subtitle-input" name="subtitle" onChange={this.handleState}></input>
        </label>
      </form>
    )
  }
}

