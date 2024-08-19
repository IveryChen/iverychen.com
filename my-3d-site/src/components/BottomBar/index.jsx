import React from "react";
import { Link } from "react-router-dom";

import "./BottomBar.css";

const BottomBar = () => {
  return (
    <header>
      <div className="bottom-bar">
        <nav className="contact-items">
          <div className="contact">copyright©IveryChen2024</div>
        </nav>
        <nav className="contact-items">
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
        </nav>
      </div>
    </header>
  );
};

export default BottomBar;
