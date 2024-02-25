import React from "react";
import "./Mobile_Cards.css";

const MobileCards = () => {
  return (
    <div className="container">
      <div className="outer-container">
        <h1 className="titluCard">CE SERVICII OFERIM?</h1>
      </div>

      <div className="mobile-container">
        <div className="card-container">
          <div className="card">
            <h1>Servicii de marketing</h1>
            <hr className="hr-line" />
            <div className="bar-color"></div>
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit. <br />
              Velit, praesentium?
            </p>
            <button className="button">Solicită</button>
          </div>

          <div className="card">
            <h1>Publicitate</h1>
            <hr className="hr-line" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              praesentium?
            </p>
            <button className="button">Solicită</button>
          </div>

          <div className="card">
            <h1>Creeare de site-uri</h1>
            <hr className="hr-line" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              praesentium?
            </p>
            <button className="button">Solicită</button>
          </div>

          <div className="card">
            <h1>Consultanță în marketing</h1>
            <hr className="hr-line" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              praesentium?
            </p>
            <button className="button">Solicită</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCards;
