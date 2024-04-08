import React from "react";
import "./SolicitaOfertaMobil.css";
import AnimatedFromLeft from "./AnimatedFromLeft";

const MobileComponent = () => {
  return (
    <div className="mobile_component_container">
      <AnimatedFromLeft>
        <div className="mobile-component">
          <p>
            Suntem o agenție de marketing digital care construiește strategii
            efiiente pentru a te ajuta să ajungi la clienți și să îți mărești
            constant vânzările.
          </p>

          <br></br>
          <br></br>

          <a href="#contactUs" className="buton_solicita_oferta_mobil">
            Solicită ofertă &#10132;
          </a>
        </div>
      </AnimatedFromLeft>
    </div>
  );
};

export default MobileComponent;
