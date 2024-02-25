import React from "react";
import "./EyesOnUs.css";
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

const EyesOnUs = () => {
  return (
    <div className="eyes-container">
      <div className="eyes-content">
        <div className="eyes-icon-text">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <a href="mailto:onpublicity@example.com">onpublicity@gmail.com</a>
        </div>
        <div className="eyes-icon-text">
          <FontAwesomeIcon icon={faLocationDot} className="icon" />
          <a href="https://example.com/location">Calea Floresti</a>
        </div>
        <div className="eyes-icon-text">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <a href="tel:0721944958">0721 944 958</a>
        </div>
        <h1 className="eyes-title">Titlu H1</h1>
        <p className="eyes-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum
          nec nisi scelerisque mattis. Duis auctor ligula ac nisi sollicitudin,
          et fermentum tortor feugiat.
        </p>

        {/* ----- RETELE DE SOCIALIZARE ---- */}

        <div className="eyes-icons">
          <div className="eyesonus__social_media_row">
            {/* FACEBOOK */}
            <a href="/">
              <FontAwesomeIcon
                icon={faFacebook}
                className="eyesonus__social_media_icons eyesonus__social_media_iconsfirst__social"
              />
            </a>

            {/* INSTAGRAM */}
            <a href="/">
              <FontAwesomeIcon
                icon={faInstagram}
                className="eyesonus__social_media_icons"
              />
            </a>

            {/* TELEGRAM */}
            <a href="/">
              <FontAwesomeIcon
                icon={faTelegram}
                className="eyesonus__social_media_icons"
              />
            </a>

            {/* TIK TOK */}
            <a href="/">
              <FontAwesomeIcon
                icon={faTiktok}
                className="eyesonus__social_media_icons eyesonus__last1_icon"
              />
            </a>
          </div>

          <div className="eyesonus__social_media_row">
            {/* LinkedIn */}
            <a href="/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="eyesonus__social_media_icons eyesonus__first__social"
              />
            </a>

            {/* Youtube */}
            <a href="/">
              <FontAwesomeIcon
                icon={faYoutube}
                className="eyesonus__social_media_icons"
              />
            </a>

            {/* Pinterest */}
            <a href="/">
              <FontAwesomeIcon
                icon={faPinterest}
                className="eyesonus__social_media_icons eyesonus__last1_icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyesOnUs;
