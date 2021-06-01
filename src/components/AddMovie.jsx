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

    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(event) {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    })
  }


  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label"> "Título"
            <input type='text' data-testid="title-input" value={this.state.value}
              onChange={this.handleInputs}
            />
          </label>
          
          <label data-testid="subtitle-input-label"> "Subtítulo"
            <input type='text' data-testid="subtitle-input" value={this.state.value}
              onChange={this.handleInputs}
            />
          </label>

          <label> caminho da imagem
            <input />
          </label>

          <label> sinopse
            <input />
          </label>

          <label> avaliação
            <input />
          </label>

          <label> gênero
            <input />
          </label>
        </form>
      </div>
    )
  }
}
