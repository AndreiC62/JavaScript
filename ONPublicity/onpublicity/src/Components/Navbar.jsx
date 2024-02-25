import React, { useState } from "react";
import MyLogo from "./logo.svg";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTiktok,
  faLinkedin,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

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
          <a href="/" onClick={toggleMenu} className="navbar__links">
            Acasă
          </a>
          <a href="/" onClick={toggleMenu} className="navbar__links">
            Servicii
          </a>
          <a href="/" onClick={toggleMenu} className="navbar__links">
            Despre noi
          </a>
          <a href="/" onClick={toggleMenu} className="navbar__links">
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
          <p>
            <span>RO</span> / EN / RU
          </p>
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
        <br></br>
        <a href="/" className="meniu-mail">
          <FontAwesomeIcon icon={faEnvelope} className="icon1" />
          onpublicity@gmail.com
        </a>
        <a href="/" className="meniu-mail">
          <FontAwesomeIcon icon={faPhone} className="icon1" />
          +40 746 644 529
        </a>
        <a href="/" className="meniu-mail">
          <FontAwesomeIcon icon={faLocationDot} className="icon1" />
          Calea Floresti 77
        </a>
        <br />
        <br />

        {/* ------------ RETELE DE SOCIALIZARE --------------  */}

        <div className="social_media_row">
          {/* FACEBOOK */}
          <a href="/">
            <FontAwesomeIcon
              icon={faFacebook}
              className="social_media_icons first__social"
            />
          </a>

          {/* INSTAGRAM */}
          <a href="/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="social_media_icons"
            />
          </a>

          {/* TELEGRAM */}
          <a href="/">
            <FontAwesomeIcon icon={faTelegram} className="social_media_icons" />
          </a>

          {/* TIK TOK */}
          <a href="/">
            <FontAwesomeIcon icon={faTiktok} className="social_media_icons" />
          </a>
        </div>

        <div className="social_media_row">
          {/* LinkedIn */}
          <a href="/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="social_media_icons first__social"
            />
          </a>

          {/* Youtube */}
          <a href="/">
            <FontAwesomeIcon icon={faYoutube} className="social_media_icons" />
          </a>

          {/* Pinterest */}
          <a href="/">
            <FontAwesomeIcon
              icon={faPinterest}
              className="social_media_icons"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
