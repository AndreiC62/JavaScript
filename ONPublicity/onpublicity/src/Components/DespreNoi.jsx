import React from "react";
import "./DespreNoi.css";

const DespreNoi = () => {
  return (
    <div className="background-container">
      <div className="offer-container">
        <div className="offer-content">
          <h1>CINE SUNTEM NOI?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="offer-button">Solicita Oferta &#10132;</button>
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
  );
};

export default DespreNoi;
