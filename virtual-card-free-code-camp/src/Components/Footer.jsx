import React from "react";
import Lk from "../img/LinkedinIcon.svg";
import Gh from "../img/GitHubIcon.svg";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/jean-ren%C3%A9-decoster-6b2476231/">
        <img src={Lk} alt="" />
      </a>
      <a href="https://github.com/Jreuh/">
        <img src={Gh} alt="" />
      </a>
    </div>
  );
}
