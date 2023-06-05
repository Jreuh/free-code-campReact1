import React from "react";
import Portrait from "../img/portrait.webp";

export default function Info() {
  function handleMail() {
    window.location.assign("mailto:jeanrene.decoster@gmail.com");
  }
  return (
    <div>
      <img className="portrait" src={Portrait} alt="Portrait" />
      <div className="infoContainer">
        <h1>Jean-René Decoster</h1>
        <p>Developer</p>
        <button onClick={handleMail} className="btn-touch">
          Email
        </button>
      </div>
    </div>
  );
}
