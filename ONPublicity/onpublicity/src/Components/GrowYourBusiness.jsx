import React from "react";
import "./GrowYourBusiness.css"; // Fișierul CSS asociat
import GrowImage from "../img/cineSuntem.jpg";
import AnimatedFromBottom from "./AnimatedFromBottom";

const GrowYourBusiness = () => {
  return (
    <div className="grow_animated_color_background">
      <AnimatedFromBottom>
        <div className="grow_main_container">
          <div className="grow-container">
            <div className="grow-image-outer">
              <img
                src={GrowImage}
                alt="Grow Your Business"
                className="grow-image"
              />
            </div>
            <div className="grow-content">
              <h1 className="grow-title">CREȘTE-ȚI AFACEREA ALĂTURI DE NOI</h1>
              <p className="grow-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                eget ultricies velit. Vestibulum commodo viverra justo, ut
                vestibulum libero facilisis at. Nulla facilisi.
              </p>
              <AnimatedFromBottom>
                <a href="#contactUs" className="grow-button">
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

export default GrowYourBusiness;
