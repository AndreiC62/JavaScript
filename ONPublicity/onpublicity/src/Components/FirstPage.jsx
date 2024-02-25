import React, { useEffect, useState } from "react";
import "./Firstpage.css";

const MotivationalBanner = () => {
  const messages = [
    "REALIZAM STRATEGIA",
    "STABILIM SCOPUL",
    "PRIMIM REZULTATE",
    "DIGITAL MARKETING",
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [messages.length]);

  const currentMessage = messages[currentMessageIndex];

  return (
    <div className="motivational-banner">
      <div className="background1">
        <div className="content-container">
          <p className="paragraf__descriere">
            Suntem o agenție de marketing digital care <br />
            construiește strategii efiiente pentru a te ajuta să <br /> ajungi
            la clienți și să îți mărești constant vânzările.
          </p>
          <button className="btn_solicita_oferta">
            Solicită ofertă &#10132;
          </button>
        </div>
        <div className="text1">{currentMessage.split(" ")[0]}</div>
      </div>
      <div className="background2">
        <div className="text2">{currentMessage.split(" ")[1]}</div>
      </div>
    </div>
  );
};

export default MotivationalBanner;
