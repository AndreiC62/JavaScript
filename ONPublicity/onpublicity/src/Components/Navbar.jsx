import React from "react";
import "./Navbar.css";
import MyLogo from "./logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={MyLogo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
        <a href="/">Link 3</a>
        <a href="/">Link 4</a>
      </div>
      <div className="navbar-right"></div>
    </nav>
  );
};

export default Navbar;
