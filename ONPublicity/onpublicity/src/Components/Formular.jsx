import React from "react";
import "./Formular.css";

const Formular = () => {
  return (
    <div className="background-container">
      <div className="form-container">
        <h1 className="form-title">
          COMPLETEAZĂ FORMULARUL ȘI VEI FI CONTACTAT IMEDIAT
        </h1>
        <p className="form-content paragraf_formular">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          repellat, reprehenderit ad et totam culpa voluptas sit veritatis,
          iusto vel voluptatibus exercitationem ut, cumque quo blanditiis quas
          quidem minima quos!
        </p>
        <form className="form-content">
          <div className="form-field">
            <input
              className="form-input"
              type="text"
              id="nume"
              name="nume"
              placeholder="Nume"
            />
          </div>
          <div className="form-field">
            <input
              className="form-input"
              type="text"
              id="prenume"
              name="prenume"
              placeholder="Prenume"
            />
          </div>
          <div className="form-field">
            <input
              className="form-input"
              type="text"
              id="telefon"
              name="telefon"
              placeholder="Telefon"
            />
          </div>
          <div className="form-field">
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <button className="form-button">Solicită Oferta</button>

          <p className="form-agreement">
            <input
              className="form-checkbox"
              type="checkbox"
              id="acord"
              name="acord"
            />
            <p className="acord">
              Făcând click pe acest buton, îmi dau acordul pentru prelucrarea
              datelor mele personale și sunt de acord cu termenii și condițiile.
            </p>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Formular;
