import React from "react";
import "./EyesOnUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTiktok,
  faLinkedin,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import FadeInAnimation from "./FadeInAnimation";

const EyesOnUs = () => {
  return (
    <FadeInAnimation>
      <div className="eyes-container">
        <div className="eyes-content">
          <h1 className="eyes-title">FII CU OCHII PE NOI</h1>

          {/* <p className="eyes-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
            ipsum nec nisi scelerisque mattis. Duis auctor ligula ac nisi
            sollicitudin, et fermentum tortor feugiat.
          </p> */}

          {/* ----- RETELE DE SOCIALIZARE ---- */}

          <div className="eyes-icons">
            <div className="eyesonus__social_media_row">
              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/profile.php?id=100095584172666"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="eyesonus__social_media_icons eyesonus__social_media_iconsfirst__social"
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
                  className="eyesonus__social_media_icons"
                />
              </a>

              {/* TELEGRAM */}
              <a href="/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTelegram}
                  className="eyesonus__social_media_icons"
                />
              </a>

              {/* TIK TOK */}
              <a href="/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="eyesonus__social_media_icons eyesonus__last1_icon"
                />
              </a>
            </div>

            <div className="eyesonus__social_media_row">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/onpublicity/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="eyesonus__social_media_icons eyesonus__first__social"
                />
              </a>

              {/* Youtube */}
              <a href="/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="eyesonus__social_media_icons"
                />
              </a>

              {/* Pinterest */}
              <a href="/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="eyesonus__social_media_icons eyesonus__last1_icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeInAnimation>
  );
};

export default EyesOnUs;
