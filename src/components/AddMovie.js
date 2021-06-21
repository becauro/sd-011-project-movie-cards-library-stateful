import React, { Component } from 'react';
import SearchInput from './SearchInput';
import InputSubitile from './InputSubitile';
import InputImage from './InputImage';
import InputTextArea from './InputTextArea';
import InputNumber from './InputNumber';

// const [ title, setTitle ] = React.useState('')
export default class AddMovie extends Component {
  handleChange = (ev) => {
    console.log(ev.target.value);
  };

  render() {
    return (
      <form data-testid="add-movie-form">
        <SearchInput handleChange={ this.handleChange } />
        <InputSubitile />
        <InputImage />
        <InputTextArea />
        <InputNumber />
      </form>
    );
  }
}
