import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.min.js";
import Nav from "./Components/nav.jsx";
import Intro from "./Components/intro.jsx";
import Portfolio from "./Components/portfolio.jsx";
import About from "./Components/about.jsx";
import Contact from "./Components/contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Intro />
    <Portfolio />
    <About />
    <Contact />
  </StrictMode>
);
