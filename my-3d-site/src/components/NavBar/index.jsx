import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import images from "../../imageImports";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuIconRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target !== menuIconRef.current
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        IVERY CHEN
      </Link>
      <div className="menu-toggle-container">
        <input
          type="checkbox"
          id="menu-toggle"
          className="menu-toggle-checkbox"
        />
        <label
          htmlFor="menu-toggle"
          className="menu-toggle"
          onClick={toggleDropDown}
        >
          <img
            ref={menuIconRef}
            className="menu-icon"
            src={images["menu_icon"]}
            alt="Menu"
          />
        </label>
        <nav
          className={`dropdown ${dropdownOpen ? "active" : ""}`}
          id="dropdown"
          ref={dropdownRef}
        >
          <Link to="/code" className="menu-item">
            code
          </Link>
          <Link to="/about" className="menu-item">
            about
          </Link>
          <a
            href="https://drive.google.com/file/d/1D5x3XdFlm3k9ezhSleGG2tEriwrKVXYV/view?usp=sharing"
            className="menu-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </nav>
      </div>
      <nav className="menu" id="menu">
        <Link to="/code" className="menu-item">
          code
        </Link>
        <Link to="/about" className="menu-item">
          about
        </Link>
        <a
          href="https://drive.google.com/file/d/1D5x3XdFlm3k9ezhSleGG2tEriwrKVXYV/view?usp=sharing"
          className="menu-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
