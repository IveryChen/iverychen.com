import styled from "@emotion/styled";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import Box from "../Box";
import Text from "../Text";
import images from "../../imageImports";

import "./NavBar.css";

const StyledBox = styled(Box)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledMenu = styled(Box)`
  @media (min-width: 768px) {
    display: flex;
  }
`;

const StyledLogo = styled(Text)`
  font-size: 4vw;
  font-weight: ${(props) => props.fontWeight || 800};

  @media (max-width: 768px) {
    font-size: 7vw;
  }
`;

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
    <header
      style={{
        backgroundColor: "#efefec",
        padding: "16px",
        borderBottom: "1px solid black",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <Link to="/">
        <StyledLogo cv08 tnum>
          IVERY CHEN
        </StyledLogo>
      </Link>
      <Box height="auto" position="relative">
        <Box display="none" type="checkbox" cursor="pointer" />
        <StyledBox
          cursor="pointer"
          display="block"
          htmlFor="menu-toggle"
          onClick={toggleDropDown}
        >
          <IoMenu size={36} />
        </StyledBox>
        <nav
          className={`dropdown ${dropdownOpen ? "active" : ""}`}
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
      </Box>
      <StyledMenu display="none" gap="12px">
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
      </StyledMenu>
    </header>
  );
};

export default NavBar;
