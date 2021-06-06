import React, { Component } from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import data from './data';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieLibrary movies={ data } />
      </div>
    );
  }
}
