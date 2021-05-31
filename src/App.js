import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieList from './components/MovieList'
import movies from './data'
import SearchBar from './components/SearchBar'
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar searchText="" onSearchTextChange="textoaqui" bookmarkedOnly ="" selectedGenre="" onSelectedGenreChange="" onBookmarkedChange="" />
      <AddMovie />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
