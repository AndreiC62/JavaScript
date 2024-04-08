import React from "react";
import "./DespreNoi.css";
import AnimatedFromBottom from "./AnimatedFromBottom";

const DespreNoi = () => {
  return (
    <div className="outer_despreNoi_color_container">
      <AnimatedFromBottom>
        <div className="background-container">
          <div className="offer-container" id="despre-noi">
            <div className="offer-content">
              <h1>CINE SUNTEM NOI?</h1>
              <p>
                Suntem cei cărora le pasă. Suntem pasionați de transfomarea
                viziunilor în realitate și de propulsarea afacerilor către noi
                culmi de succes. La agenția noastră, nu oferim doar servicii, ci
                construim parteneriate durabile.
              </p>
              <AnimatedFromBottom>
                <a href="#contactUs" className="offer-button">
                  Solicită Oferta &#10132;
                </a>
              </AnimatedFromBottom>
            </div>

            {/* --------- IMAGINEA ------ (in dreapta pe versiunea desktop) */}

            <div className="offer-image-container">
              <img
                src={require("../img/cineSuntem.jpg")}
                alt="Offer"
                className="offer-image"
              />
            </div>
          </div>
        </div>
      </AnimatedFromBottom>
    </div>
  );
};

export default DespreNoi;
