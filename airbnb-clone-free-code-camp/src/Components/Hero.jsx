import React from "react";
import herogrid from "../img/Group77.svg";
export default function Hero() {
  return (
    <section className="hero">
      <img src={herogrid} alt="" className="hero--photo" />
      <h1 className="hero--h1">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
