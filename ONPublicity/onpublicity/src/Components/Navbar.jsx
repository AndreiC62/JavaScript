import React, { useState } from "react";
import MyLogo from "./logo.svg";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={MyLogo} alt="Logo" className="logo" />
        </div>
        <div className={`navbar-center ${isMenuOpen ? "show" : ""}`}>
          <a href="/" onClick={toggleMenu}>
            Acasă
          </a>
          <a href="/" onClick={toggleMenu}>
            Servicii
          </a>
          <a href="/" onClick={toggleMenu}>
            Despre noi
          </a>
          <a href="/" onClick={toggleMenu}>
            Contactează-ne
          </a>
        </div>
        <div className="navbar-right">
          <div
            className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="language">
          <p>RO / EN</p>
        </div>
      </nav>
      <div className={`link-container ${isMenuOpen ? "show" : ""}`}>
        <a href="/" className="link-meniu">
          Acasă
        </a>
        <a href="/" className="link-meniu">
          Servicii
        </a>
        <a href="/" className="link-meniu">
          Despre noi
        </a>
        <a href="/" className="link-meniu">
          Contactează-ne
        </a>

        <br></br>

        <a href="/" className="meniu-mail">
          <FontAwesomeIcon icon={faEnvelope} className="icon1" />
          onpublicity@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Navbar;
