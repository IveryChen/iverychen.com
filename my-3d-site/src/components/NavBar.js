// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 
import images from '../imageImports'; 

const NavBar = () => {
  const toggleDropDown = () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('show');
  };

  const scrollToDiv = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
        <Link to="/" className="logo">IVERY CHEN</Link>
        <label htmlFor="menu-toggle" className="menu-toggle" onClick={toggleDropDown}>
          <img className="menu-icon" src={images["menu_icon"]} alt="Menu" />
        </label> 
        <nav className="dropdown" id="dropdown">
          <Link to="/#selected-work" className="menu-item" onClick={() => scrollToDiv('selected-work')}>work</Link>
          <Link to="/about" className="menu-item">about</Link>
          <a href="https://drive.google.com/file/d/1D5x3XdFlm3k9ezhSleGG2tEriwrKVXYV/view?usp=sharing" className="menu-item" target="_blank" rel="noopener noreferrer">resume</a>
        </nav>
        <nav className="menu" id="menu">
          <Link to="/#selected-work" className="menu-item" onClick={() => scrollToDiv('selected-work')}>work</Link>
          <Link to="/about" className="menu-item">about</Link>
          <a href="https://drive.google.com/file/d/1D5x3XdFlm3k9ezhSleGG2tEriwrKVXYV/view?usp=sharing" className="menu-item" target="_blank" rel="noopener noreferrer">resume</a>
        </nav>
    </header>
  );
};

export default NavBar;
