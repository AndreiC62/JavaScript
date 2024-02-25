import React, { useRef, useEffect, useState } from "react";
import "./FadeInAnimation.css";

const FadeInAnimation = ({ children }) => {
  const animatedElementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = animatedElementRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setIsVisible(elementTop < windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificați starea inițială la încărcarea componentei

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={animatedElementRef}
      className={`fade-in ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInAnimation;
