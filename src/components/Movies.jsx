/* eslint-disable import/no-cycle */
import React, { useEffect, useState, useContext } from 'react';
import * as uuid from 'uuid';
import Card from './Card';
import getData from './utilities/getData';
import { SearchContext } from '../App';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const search = useContext(SearchContext);
  const key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    getData(search.value, key, setMovies);
  }, [search.value]);

  return (
    <div className="movies">
      <h1 className="text-3xl">Search results:</h1>
      <div className="showcase">
        {movies.map((movie) => (
          <Card key={uuid.v4()} title={movie.Title} cover={movie.Poster} year={movie.Year} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
