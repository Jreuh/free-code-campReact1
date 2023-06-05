import React from "react";

export default function Main() {
  return (
    <div className="main">
      <h1 className="main--title">Fun Facts about React</h1>
      <ul className="main--list-container">
        <li className="main--list_item">Was first released in 2013</li>
        <li className="main--list_item">
          Was originally created by Jordan Walke
        </li>
        <li className="main--list_item">Has well over 100K stars on GitHub</li>
        <li className="main--list_item">Is maintained by Facebook</li>
        <li className="main--list_item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </div>
  );
}
