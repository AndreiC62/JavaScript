import React, { useEffect, useRef } from "react";
import "./AnimatedFromLeft.css";

const AnimatedFromLeft = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const currentRef = containerRef.current;

    if (currentRef) {
      currentRef.classList.add("active");
    }
  }, []);

  return (
    <div ref={containerRef} className="animated-from-left-container">
      {children}
    </div>
  );
};

export default AnimatedFromLeft;
