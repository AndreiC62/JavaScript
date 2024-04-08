import React from "react";
import "./WhyUs.css";
import MyProfile from "../img/persoana.svg";
import preturi from "../img/bani.svg";
import worldWide from "../img/wordwide.svg";
import timp from "../img/timp.svg";
import AnimatedFromBottom from "./AnimatedFromBottom";

const WhyUs = () => {
  return (
    <div className="why_us_color_container">
      <AnimatedFromBottom>
        <div className="why-us-container">
          <div className="why-us-outer-container">
            <h1 className="why-us-title">
              DE CE SĂ ALEGI
              <br /> AGENȚIA NOASTRĂ?
            </h1>
          </div>

          <div className="why-us-mobile-container">
            <div className="why-us-card-container">
              <div className="why-us-card">
                <img src={MyProfile} alt="profil" />
                <hr className="hr-line_wus" />
                <p>
                  La noi, fiecare afacere este unică. <br />
                  Oferim strategii personalizate, <br />
                  create special pentru nevoile tale <br />
                  individuale, pentru a-ți asigura <br />
                  succesul pe termen lung.
                </p>
                {/* <button className="why-us-button">Solicită</button> */}
              </div>

              <div className="why-us-card">
                <img src={preturi} alt="preturi accesibile" />
                <hr className="hr-line_wus" />
                <p>
                  Creăm oportunități reale pentru tine. <br />
                  Cu prețuri accesibile, îți oferim <br />
                  soluții de calitate la costuri <br />
                  prietenoase, fără a compromite <br />
                  excelența serviciilor noastre.
                </p>
                {/* <button className="why-us-button">Solicită</button> */}
              </div>

              <div className="why-us-card">
                <img src={worldWide} alt="world wide" />
                <hr className="hr-line_wus" />
                <p>
                  Suntem la curent cu noile tendințe. <br />
                  Utilizăm abordări de promovare <br />
                  modernă, astfel încât afacerea ta să <br />
                  strălucească în lumea digitală.
                </p>
                {/* <button className="why-us-button">Solicită</button> */}
              </div>

              <div className="why-us-card">
                <img src={timp} alt="Servicii realizate la timp" />
                <hr className="hr-line_wus" />
                <p>
                  Timpul este prețios. <br />
                  Ne angajăm să livrăm serviciile <br />
                  noastre la timp, astfel încât să poți <br />
                  beneficia rapid de rezultatele <br />
                  investiției tale.
                </p>
                {/* <button className="why-us-button">Solicită</button> */}
              </div>
            </div>
          </div>
        </div>
      </AnimatedFromBottom>
    </div>
  );
};

export default WhyUs;
