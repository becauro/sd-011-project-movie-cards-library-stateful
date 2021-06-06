import React from 'react';
import Header from './components/Header';
// import SearchBar from './components/SearchBar';
// import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <SearchBar /> */}
      <Header />
      <MovieLibrary movies={ movies } />
      {/* <AddMovie /> */}
    </div>
  );
}

export default App;
