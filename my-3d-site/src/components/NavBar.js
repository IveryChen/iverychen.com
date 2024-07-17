// src/components/NavBar.js
import React, {useState, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 
import images from '../imageImports'; 

const NavBar = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuIconRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close dropdown if clicked outside
      if (
        dropdownRef.current && // Check if dropdownRef is valid
        !dropdownRef.current.contains(event.target) && // Click outside dropdown
        event.target !== menuIconRef.current // Click is not on menu icon
      ) {
        setDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const scrollToDiv = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
        <Link to="/" className="logo">IVERY CHEN</Link>
        <div className="menu-toggle-container">
          <input type="checkbox" id="menu-toggle" className="menu-toggle-checkbox" />
          <label htmlFor="menu-toggle" className="menu-toggle" onClick={toggleDropDown}>
            <img ref={menuIconRef} className="menu-icon" src={images["menu_icon"]} alt="Menu" />
          </label>
          <nav className={`dropdown ${dropdownOpen ? 'active' : ''}`} id="dropdown" ref={dropdownRef}>
            <Link to="/#selected-work" className="menu-item" onClick={() => scrollToDiv('selected-work')}>work</Link>
            <Link to="/about" className="menu-item">about</Link>
            <a href="https://drive.google.com/file/d/1D5x3XdFlm3k9ezhSleGG2tEriwrKVXYV/view?usp=sharing" className="menu-item" target="_blank" rel="noopener noreferrer">resume</a>
          </nav>
        </div>
        <nav className="menu" id="menu">
          <Link to="/#selected-work" className="menu-item" onClick={() => scrollToDiv('selected-work')}>work</Link>
          <Link to="/about" className="menu-item">about</Link>
          <a href="https://drive.google.com/file/d/1D5x3XdFlm3k9ezhSleGG2tEriwrKVXYV/view?usp=sharing" className="menu-item" target="_blank" rel="noopener noreferrer">resume</a>
        </nav>
    </header>
  );
};

export default NavBar;
