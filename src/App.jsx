/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Movies from './components/Movies';

export const SearchContext = React.createContext();

function App() {
  const [movieSearch, setMovieSearch] = useState('Hubie Halloween');

  return (
    <>
      <SearchContext.Provider value={{ value: movieSearch, method: setMovieSearch }}>
        <NavBar />
        <Search />
        <Movies />
      </SearchContext.Provider>
    </>
  );
}

export default App;
