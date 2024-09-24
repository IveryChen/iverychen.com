import styled from "@emotion/styled";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

import Box from "../Box";
import Text from "../Text";
import images from "../../imageImports";

const StyledBox = styled(Box)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(Link)`
  cursor: pointer;
  font-size: 16px;
  margin: 4px;
  padding: 4px;
  text-decoration: none;

  &:hover,
  &.active {
    font-weight: bold;
  }
`;

const StyleDropdown = styled(Box)`
  @media (min-width: 768px) {
    opacity: 0;
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

  const dropdownStyles = {
    display: "flex",
    flexDirection: "column",
  };

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
      <MenuItem to="/">
        <StyledLogo cv08 tnum>
          IVERY CHEN
        </StyledLogo>
      </MenuItem>
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
        <StyleDropdown
          backgroundColor="#efefec"
          opacity={dropdownOpen ? 1 : 0}
          padding="8px"
          position="absolute"
          right={0}
          transform={dropdownOpen ? "translateY(0)" : "translateY(10px)"}
          transition="opacity 0.3s ease-out, transform 0.3s ease"
          zIndex="1"
        >
          <nav style={dropdownStyles} ref={dropdownRef}>
            <Box
              cursor="pointer"
              font-size="16px"
              margin="4px"
              padding="4px"
              text-decoration="none"
            >
              <MenuItem
                to="/code"
                className={`menu-item ${isActive("/code") ? "active" : ""}`}
              >
                Code
              </MenuItem>
            </Box>
            <MenuItem
              to="/about"
              className={`menu-item ${isActive("/about") ? "active" : ""}`}
            >
              About
            </MenuItem>
            <a
              href="https://drive.google.com/file/d/1D5x3XdFlm3k9ezhSleGG2tEriwrKVXYV/view?usp=sharing"
              className="menu-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </StyleDropdown>
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
