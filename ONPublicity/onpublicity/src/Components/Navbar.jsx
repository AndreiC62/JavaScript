import React, { useState } from "react";
// import { Link } from "react-router-dom";
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

  const hideNavbar = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={MyLogo} alt="Logo" className="logo" />
        </div>
        <div className={`navbar-center ${isMenuOpen ? "show" : "hide_navbar"}`}>
          <a href="/" onClick={hideNavbar} className="navbar__links">
            Acasă
          </a>
          <a href="#servicii" onClick={hideNavbar} className="navbar__links">
            Servicii
          </a>
          <a href="#despre-noi" onClick={hideNavbar} className="navbar__links">
            Despre noi
          </a>
          <a href="#contactUs" onClick={hideNavbar} className="navbar__links">
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

        {/* ----------------------------- LIMBA (MOMENTAN INDISPONIBIL) -------------------------- */}

        {/* <div className="language">
          <p>
            <span>RO</span> / EN / RU
          </p>
        </div> */}

        {/* ----------------------------- LIMBA (MOMENTAN INDISPONIBIL) -------------------------- */}
      </nav>

      <div className={`link-container ${isMenuOpen ? "show" : ""}`}>
        <a href="/" onClick={hideNavbar} className="link-meniu">
          Acasă
        </a>
        <a href="#servicii" onClick={hideNavbar} className="link-meniu">
          Servicii
        </a>
        <a href="#despre-noi" onClick={hideNavbar} className="link-meniu">
          Despre noi
        </a>
        <a href="#contactUs" onClick={hideNavbar} className="link-meniu">
          Contactează-ne
        </a>
        <br></br>
        <br></br>

        <a href="mailto:onpublicity@gmail.com" className="meniu-mail">
          <FontAwesomeIcon icon={faEnvelope} className="icon1" />
          <span className="icon-text">onpublicity@gmail.com</span>
        </a>
        <a href="tel:0721944958" className="meniu-mail">
          <FontAwesomeIcon icon={faPhone} className="icon1" />
          <span className="icon-text">+40 746 644 529 </span>
        </a>
        <a href="/" className="meniu-mail">
          <FontAwesomeIcon icon={faLocationDot} className="icon1" />
          <span className="icon-text"> Calea Floresti 77 </span>
        </a>
        <br />
        <br />

        {/* ------------ RETELE DE SOCIALIZARE --------------  */}

        <div className="social_media_row">
          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/profile.php?id=100095584172666"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="social_media_icons first__social"
            />
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/onpublicity.md/"
            target="_blank"
            rel="noreferrer"
          >
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
          <a
            href="https://www.linkedin.com/company/onpublicity/"
            target="_blank"
            rel="noreferrer"
          >
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
