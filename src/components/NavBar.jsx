/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
import React from 'react';

const NavBar = () => {
  const openPortofolio = () => {
    window.open('https://razvan-maracine.netlify.app/', '_blank');
  };
  return (
    <nav className="nav-container">
      <div className="navbar">
        <h1 className="cursor-default text-2xl">Movie Searcher</h1>
        <ul className="flex text-xl cursor-pointer">
          <li className="hover:text-secondary pr-10 transition">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-secondary transition"><a href="#na" onClick={openPortofolio}>About Me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
