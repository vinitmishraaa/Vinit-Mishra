import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/skills.css";
import "./styles/education.css";
import "./styles/resume.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/footer.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);