import React from "react";
import "./Footer.css";
import MyLogo from "./WhiteLogo.svg";
import FadeInAnimation from "./FadeInAnimation";

const Footer = () => {
  return (
    <FadeInAnimation>
      <footer className="footer-container">
        <div className="footer-content">
          <img src={MyLogo} alt="Logo" className="footer-logo" />
          <h3>Politica de confidentialitate</h3>
          <h3>Termeni si conditii</h3>
          <hr className="footer-line" />
          <p className="drepturi">©2023 ONPublicity SRL</p>
          <p className="drepturi">Toate drepturile sunt rezervate.</p>
        </div>
      </footer>
    </FadeInAnimation>
  );
};

export default Footer;
