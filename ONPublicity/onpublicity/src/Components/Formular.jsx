import React, { useState } from "react";
import "./Formular.css";
import FadeInAnimation from "./FadeInAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configurare Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5SOu6BnQnJm3IlA6A-WEud_Trd4PvTgc",
  authDomain: "onpublicity-3c9fc.firebaseapp.com",
  projectId: "onpublicity-3c9fc",
  storageBucket: "onpublicity-3c9fc.appspot.com",
  messagingSenderId: "1040353893998",
  appId: "1:1040353893998:web:217978d434ed7caaf9d07f",
  measurementId: "G-P0GG4SBRMY",
};

const firebaseApp = initializeApp(firebaseConfig);

const Formular = () => {
  const [nume, setNume] = useState("");
  const [prenume, setPrenume] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [acord, setAcord] = useState(false);
  const [formularTrimis, setFormularTrimis] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!acord) {
      alert("Trebuie să fiți de acord cu termenii și condițiile!");
      return;
    }

    const db = getFirestore(firebaseApp);
    try {
      const docRef = await addDoc(collection(db, "contactRequests"), {
        nume: nume,
        prenume: prenume,
        telefon: telefon,
        email: email,
      });
      console.log("Document written with ID: ", docRef.id);
      setNume("");
      setPrenume("");
      setTelefon("");
      setEmail("");
      setAcord(false);
      setFormularTrimis(true);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <FadeInAnimation>
      <div className="form_color_container">
        <div className="form-container" id="contactUs">
          <div className="column-left">
            <h1 className="form-title">
              COMPLETEAZĂ FORMULARUL ȘI VEI FI CONTACTAT IMEDIAT
            </h1>
            <p className="paragraf_formular">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              repellat, reprehenderit ad et totam culpa voluptas sit veritatis,
              iusto vel voluptatibus exercitationem ut, cumque quo blanditiis
              quas quidem minima quos!
            </p>
            <div className="subFormular_icon_info">
              <div className="eyes-icon-text">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <a href="mailto:onpublicity@example.com">
                  onpublicity@gmail.com
                </a>
              </div>
              <div className="eyes-icon-text">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <a href="https://example.com/location">Calea Floresti</a>
              </div>
              <div className="eyes-icon-text">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <a href="tel:0721944958">0721 944 958</a>
              </div>
            </div>
          </div>
          <div className="column-right">
            <form className="form_content" onSubmit={handleSubmit}>
              <div className="form-field">
                <input
                  className="form-input"
                  type="text"
                  id="nume"
                  name="nume"
                  value={nume}
                  onChange={(e) => setNume(e.target.value)}
                  placeholder="Nume"
                />
              </div>
              <div className="form-field">
                <input
                  className="form-input"
                  type="text"
                  id="prenume"
                  name="prenume"
                  value={prenume}
                  onChange={(e) => setPrenume(e.target.value)}
                  placeholder="Prenume"
                />
              </div>
              <div className="form-field">
                <input
                  className="form-input"
                  type="text"
                  id="telefon"
                  name="telefon"
                  value={telefon}
                  onChange={(e) => setTelefon(e.target.value)}
                  placeholder="Telefon"
                />
              </div>
              <div className="form-field">
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <button className="form-button">Solicită Oferta</button>

              {/* ------------------------------------------- TEST ------------------------------------ */}
              {/* ------------------------------------------- TEST ------------------------------------ */}
              {/* ------------------------------------------- TEST ------------------------------------ */}
              {/* ------------------------------------------- TEST ------------------------------------ */}

              {formularTrimis && (
                <p className="form-success-message">
                  Hey, hey! Formularul a fost trimis cu succes! <br />
                  Te vom contacta în cel mai scurt timp.
                  <br />
                  <br />
                  Îți mulțumim și... abia așteptăm să ne auzim. ❤️
                </p>
              )}

              {/* ------------------------------------------- TEST ------------------------------------ */}
              {/* ------------------------------------------- TEST ------------------------------------ */}
              {/* ------------------------------------------- TEST ------------------------------------ */}
              {/* ------------------------------------------- TEST ------------------------------------ */}

              <p className="form-agreement">
                <input
                  className="form-checkbox"
                  type="checkbox"
                  id="acord"
                  name="acord"
                  checked={acord}
                  onChange={(e) => setAcord(e.target.checked)}
                />
                <span className="acord">
                  Făcând click pe acest buton, îmi dau acordul pentru
                  prelucrarea datelor mele personale și sunt de acord cu
                  termenii și condițiile.
                </span>
              </p>
            </form>

            {/* SUB FORMULAR - ICON - PE MOBIL */}

            <div className="subFormular_icon_info_showOnMobile">
              <div className="eyes-icon-text">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <a
                  href="mailto:onpublicity@example.com"
                  className="text_icon_date_contact"
                >
                  onpublicity.md@gmail.com
                </a>
              </div>
              <div className="eyes-icon-text">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
                <a
                  href="https://example.com/location"
                  className="text_icon_date_contact"
                >
                  Calea Floresti 77, Cluj-Napoca
                </a>
              </div>
              <div className="eyes-icon-text">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <a href="tel:0721944958" className="text_icon_date_contact">
                  0746 644 529
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInAnimation>
  );
};

export default Formular;
