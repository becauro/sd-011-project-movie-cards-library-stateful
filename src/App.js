import React, { useCallback } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import movies from './data';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onclick={ useCallback } />
      </div>
    );
  }
}

export default App;
