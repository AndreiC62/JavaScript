import React, { useEffect, useState } from "react";
import "./Firstpage.css";

const MotivationalBanner = () => {
  const messages = [
    "DIGITAL MARKETING",
    "STABILIM SCOPUL",
    "REALIZĂM STRATEGIA",
    "PRIMIM REZULTATE",
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [messages.length]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationFinished(true);
    }, 1000); // Setăm un delay pentru a aștepta ca animația să se încheie

    return () => clearTimeout(timeoutId);
  }, []);

  const currentMessage = messages[currentMessageIndex];
  const firstWord = currentMessage.split(" ")[0];

  return (
    <div
      className={`motivational-banner ${
        animationFinished ? "animation-finished" : ""
      }`}
    >
      <div className="background1">
        <div className="content-container_fp">
          <p className="paragraf__descriere">
            Suntem o agenție de marketing digital care <br />
            construiește strategii eficiente pentru a te ajuta să <br /> ajungi
            la clienți și să îți mărești constant vânzările.
          </p>
          <a href="#contactUs" className="btn_solicita_oferta">
            Solicită oferta &#10132;
          </a>
        </div>
        <div className="text1">
          {firstWord}
          {firstWord === "DIGITAL" && (
            <span className="suplimentar"> AGENCY</span>
          )}
        </div>
      </div>
      <div className="background2">
        <div className="text2">{currentMessage.split(" ")[1]}</div>
      </div>
    </div>
  );
};

export default MotivationalBanner;
