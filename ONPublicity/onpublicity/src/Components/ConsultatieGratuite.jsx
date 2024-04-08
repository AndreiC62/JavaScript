import React from "react";
import "./ConsultatieGratuita.css"; // Fișierul CSS asociat
import ConsultatieImage from "../img/cineSuntem.jpg";
import AnimatedFromBottom from "./AnimatedFromBottom";

const ConsultatieGratuita = () => {
  return (
    <div className="consultatie_animated_color_background">
      <AnimatedFromBottom>
        <div className="consultatie_main_container">
          <div className="consultatie-container">
            <div className="consultatie-image-outer">
              <img
                src={ConsultatieImage}
                alt="Grow Your Business"
                className="consultatie-image"
              />
            </div>
            <div className="consultatie-content">
              <h1 className="consultatie-title">
                BENEFICIAZĂ E O CONSULTAȚIE GRATUITĂ
              </h1>
              <p className="consultatie-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                eget ultricies velit. Vestibulum commodo viverra justo, ut
                vestibulum libero facilisis at. Nulla facilisi.
              </p>
              <AnimatedFromBottom>
                <a href="#contactUs" className="consultatie-button">
                  Solicită Detalii
                </a>
              </AnimatedFromBottom>
            </div>
          </div>
        </div>
      </AnimatedFromBottom>
    </div>
  );
};

export default ConsultatieGratuita;
