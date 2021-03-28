/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import Bg from './img/bg.jpg';
import { SearchContext } from '../App';

const Search = () => {
  const context = useContext(SearchContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.input.value;
    context.method(searchValue);
  };

  return (
    <div id="home" style={{ backgroundImage: `url(${Bg})` }} className="bg-center search-section flex">
      <form onSubmit={handleSubmit} className="form">
        <input id="input" className="input" type="text" placeholder="e.g Hubie Halloween" />
        <button className="search-btn" type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
