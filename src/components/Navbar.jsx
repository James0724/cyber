import React from "react";
import { useState } from "react";

function Menubar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggle = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="menu">
      <div className="navbar-main">
        <a className="logo" href="#home">
          Home
        </a>
        <div
          className={`menu-icon ${isMenuOpen ? "active" : ""}`}
          onClick={toggle}
        >
          <div className="menu-icon__cheeckbox"></div>
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul
          className={`menu-items ${isMenuOpen ? "open" : ""}`}
          onClick={() => {
            closeMenu();
          }}
        >
          <li className={`menu-nav ${isMenuOpen ? "open" : ""}`}>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li className={`menu-nav ${isMenuOpen ? "open" : ""}`}>
            <a href="#about">About</a>
          </li>
          <li className={`menu-nav ${isMenuOpen ? "open" : ""}`}>
            <a href="#services">Services</a>
          </li>
          <li className={`menu-nav ${isMenuOpen ? "open" : ""}`}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menubar;
