import React from "react";
import reactLogo from "../img/logo192.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <img className="nav--icon" src={reactLogo} alt="Logo React" />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <h4 className="nav--title">React course - Project 1</h4>
      </nav>
    </div>
  );
}
