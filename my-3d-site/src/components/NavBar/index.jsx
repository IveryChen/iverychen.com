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
      <Text color="white" fontSize="24px" fontWeight={850}>
        Ivery Chen
      </Text>
      {/* <Link to="/" className="logo">
        IVERY CHEN
      </Link> */}
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
            code
          </Link>
          <Link
            to="/about"
            className={`menu-item ${isActive("/about") ? "active" : ""}`}
          >
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
        <Link
          to="/code"
          className={`menu-item ${isActive("/code") ? "active" : ""}`}
        >
          code
        </Link>
        <Link
          to="/about"
          className={`menu-item ${isActive("/about") ? "active" : ""}`}
        >
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
