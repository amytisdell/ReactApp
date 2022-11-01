import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <div id="form">
      <BasicExample />
    </div>
  </>
);

reportWebVitals();
