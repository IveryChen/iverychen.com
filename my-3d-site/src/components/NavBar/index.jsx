import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import Text from "../Text";
import images from "../../imageImports";

import "./NavBar.css";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuIconRef = useRef(null);
  const location = useLocation();

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

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <Link to="/">
        <Text color="white" fontSize="32px" fontWeight={950}>
          IVERY CHEN
        </Text>
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
          <IoMenu size={36} color="#ffffff" />
        </label>
        <nav
          className={`dropdown ${dropdownOpen ? "active" : ""}`}
          id="dropdown"
          ref={dropdownRef}
        >
          <Link
            to="/code"
            className={`menu-item ${isActive("/code") ? "active" : ""}`}
          >
            Code
          </Link>
          <Link
            to="/about"
            className={`menu-item ${isActive("/about") ? "active" : ""}`}
          >
            About
          </Link>
          <a
            href="https://drive.google.com/file/d/1D5x3XdFlm3k9ezhSleGG2tEriwrKVXYV/view?usp=sharing"
            className="menu-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
      <nav className="menu" id="menu">
        <Link
          to="/code"
          className={`menu-item ${isActive("/code") ? "active" : ""}`}
        >
          Code
        </Link>
        <Link
          to="/about"
          className={`menu-item ${isActive("/about") ? "active" : ""}`}
        >
          About
        </Link>
        <a
          href="https://drive.google.com/file/d/1D5x3XdFlm3k9ezhSleGG2tEriwrKVXYV/view?usp=sharing"
          className="menu-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
