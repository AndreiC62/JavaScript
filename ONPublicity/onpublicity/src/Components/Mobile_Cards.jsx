import React from "react";
import "./Mobile_Cards.css";
import AnimatedFromRight from "./AnimatedFromRight";

const MobileCards = () => {
  return (
    <div className="outer-container">
      <AnimatedFromRight>
        <div className="container" id="servicii">
          <div className="outer-container2">
            <h1 className="titluCard">CE SERVICII OFERIM?</h1>
          </div>

          <div className="mobile-container">
            <div className="card-container">
              <div className="card">
                <h1>Servicii de marketing</h1>
                <hr className="hr-line_mc" />
                <div className="bar-color"></div>
                <p>
                  Administrarea paginilor <br />
                  Realizarea creativelor <br />
                  Email Marketing <br />
                  Influence Marketing
                </p>
                <a href="#contactUs" className="button">
                  Solicită
                </a>
              </div>

              <div className="card">
                <h1>Publicitate</h1>
                <hr className="hr-line_mc" />
                <p>
                  Facebook Ads <br />
                  Google Ads <br />
                  TikTok, Youtube Ads <br />
                  SEO
                </p>
                <a href="#contactUs" className="button">
                  Solicită
                </a>
              </div>

              <div className="card">
                <h1>Creeare de site-uri</h1>
                <hr className="hr-line_mc" />
                <p>
                  Site-uri complexe <br />
                  Landing Page <br />
                  Elemente de design <br />
                  si indentitate vizuală
                </p>
                <a href="#contactUs" className="button">
                  Solicită
                </a>
              </div>

              <div className="card">
                <h1>Consultanță în marketing</h1>
                <hr className="hr-line_mc" />
                <p>
                  Strategii individuale de <br />
                  marketing <br />
                  Integrare de CRM <br />
                  Impachetarea sistemului <br />
                  analitic <br />
                </p>
                <a href="#contactUs" className="button">
                  Solicită
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedFromRight>
    </div>
  );
};

export default MobileCards;
