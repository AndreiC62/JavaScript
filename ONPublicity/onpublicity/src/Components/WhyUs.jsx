import React from "react";
import "./WhyUs.css";
import MyProfile from "../img/persoana.svg";
import preturi from "../img/bani.svg";
import worldWide from "../img/wordwide.svg";
import timp from "../img/timp.svg";

const WhyUs = () => {
  return (
    <div className="why-us-container">
      <div className="why-us-outer-container">
        <h1 className="why-us-title">
          DE CE SĂ ALEGI
          <br /> AGENTIA NOASTRĂ?
        </h1>
      </div>

      <div className="why-us-mobile-container">
        <div className="why-us-card-container">
          <div className="why-us-card">
            <img src={MyProfile} alt="profil" />
            <hr className="hr-line" />
            <p>
              Lorem ipsum, dolor sit amet <br />
              consectetur adipisicing elit. <br />
              Ducimus, nobis!
            </p>
            <button className="why-us-button">Solicită</button>
          </div>

          <div className="why-us-card">
            <img src={preturi} alt="preturi accesibile" />
            <hr className="hr-line" />
            <p>
              Lorem ipsum, dolor sit amet <br />
              consectetur adipisicing elit. <br />
              Ducimus, nobis!
            </p>
            <button className="why-us-button">Solicită</button>
          </div>

          <div className="why-us-card">
            <img src={worldWide} alt="world wide" />
            <hr className="hr-line" />
            <p>
              Lorem ipsum, dolor sit amet <br />
              consectetur adipisicing elit. <br />
              Ducimus, nobis!
            </p>
            <button className="why-us-button">Solicită</button>
          </div>

          <div className="why-us-card">
            <img src={timp} alt="Servicii realizate la timp" />
            <hr className="hr-line" />
            <p>
              Lorem ipsum, dolor sit amet <br />
              consectetur adipisicing elit. <br />
              Ducimus, nobis!
            </p>
            <button className="why-us-button">Solicită</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
