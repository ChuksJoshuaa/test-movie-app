import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import "jquery/dist/jquery";
import "jquery/dist/jquery.min";
import "jquery/dist/jquery.min.map";
import "jquery/src/jquery";

import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
