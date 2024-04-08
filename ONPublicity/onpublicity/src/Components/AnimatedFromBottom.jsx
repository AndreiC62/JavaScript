import React, { useEffect } from "react";
import "./AnimatedFromBottom.css";

const AnimatedFromBottom = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animated-from-bottom");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (elementTop < screenHeight * 0.85) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="animated-from-bottom">{children}</div>;
};

export default AnimatedFromBottom;
