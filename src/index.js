import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './styles/app.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);

