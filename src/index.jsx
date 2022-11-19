import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts/Montserrat-Regular.ttf";
import "./fonts/Inter-Regular.ttf";

import { App } from "./components/app/app";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
