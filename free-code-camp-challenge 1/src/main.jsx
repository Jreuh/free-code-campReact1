import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PremierComposant from "./Component/PremierComposant.jsx";
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <PremierComposant />
    <Footer />
  </React.StrictMode>
);
