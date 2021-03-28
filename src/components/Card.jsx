/* eslint-disable react/prop-types */
import React from 'react';
import NA from './img/na.png';

const Card = ({ title, cover, year }) => (
  <div className="card flex flex-col items-center">
    <h2 className="text-lg pb-4">{title}</h2>
    <img className="img-card" alt="movie-cover" src={(cover !== 'N/A' ? cover : NA)} />
    <p className="pt-4">{year}</p>
  </div>
);
export default Card;
