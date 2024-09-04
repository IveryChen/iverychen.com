import React from "react";
import { Link } from "react-router-dom";

import Box from "../Box";
import Text from "../Text";

import "./BottomBar.css";

const BottomBar = () => {
  return (
    <header>
      <div className="bottom-bar">
        <nav className="contact-items">
          <Text fontSize="15px">©IveryChen2024</Text>
        </nav>
        <nav className="contact-items">
          <Box display="flex" gap="8px">
            <a
              href="https://drive.google.com/file/d/1D5x3XdFlm3k9ezhSleGG2tEriwrKVXYV/view?usp=sharing"
              className="contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>
            <a
              href="https://www.linkedin.com/in/ivery-chen/"
              className="contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </Box>
        </nav>
      </div>
    </header>
  );
};

export default BottomBar;
