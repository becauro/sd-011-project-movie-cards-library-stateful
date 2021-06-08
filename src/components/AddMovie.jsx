// implement AddMovie component here
import React from 'react';
import Avaliacao from './Avaliacao';
import Genero from './Genero';
import Image from './Image';
import Sinopse from './Sinopse';
import Subtitle from './Subtitle';
import Title from './Title';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title value={ title } handleChange={ this.handleChange } />
        <Subtitle value={ subtitle } handleChange={ this.handleChange } />
        <Image value={ imagePath } handleChange={ this.handleChange } />
        <Sinopse value={ storyline } handleChange={ this.handleChange } />
        <Avaliacao value={ rating } handleChange={ this.handleChange } />
        <Genero value={ genre } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default AddMovie;
