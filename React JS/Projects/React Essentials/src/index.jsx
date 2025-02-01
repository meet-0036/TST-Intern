import React from "react"; // for 2
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// for external Excersices
// import AppEx from "../excersices/AppEx.jsx";
// import "../excersices/AppEx.css";

// 1. Load Root div
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

// or (For external excersices)
// ReactDOM.createRoot(entryPoint).render(<AppEx />);

// 2. Creating App Root element
// ReactDOM.createRoot(entryPoint).render(React.createElement(App)); // <App />
