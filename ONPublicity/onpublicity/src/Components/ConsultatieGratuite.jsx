import React from "react";
import "./GrowYourBusiness.css";

const GrowYourBusiness = () => {
  return (
    <div className="grow-container">
      <div className="grow-image-outer">
        <img
          src={require("../img/cineSuntem.jpg")}
          alt="Grow Your Business"
          className="grow-image"
        />
      </div>
      <div className="grow-content">
        <h1 className="grow-title">
          BENEFICIAZĂ DE O <br /> CONSULTAȚIE GRATUITĂ
        </h1>
        <p className="grow-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
          ultricies velit. Vestibulum commodo viverra justo, ut vestibulum
          libero facilisis at. Nulla facilisi.
        </p>
        <button className="grow-button">Solicită Detalii</button>
      </div>
    </div>
  );
};

export default GrowYourBusiness;
