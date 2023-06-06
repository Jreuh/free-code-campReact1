import React from "react";
import airBnb from "../img/airbnb.svg";

export default function NavBar() {
  return (
    <nav>
      <img className="nav--logo" src={airBnb} alt="" />
    </nav>
  );
}
