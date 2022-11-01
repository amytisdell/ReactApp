import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./form"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const form = ReactDOM.createRoot(document.getElementById("form"));
form.render(
  <div> 
    <h3>Log In</h3>
    <BasicExample/>
  </div> 
);

reportWebVitals();
