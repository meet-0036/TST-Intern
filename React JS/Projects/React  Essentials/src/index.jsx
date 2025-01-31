import React from "react"; // for 2
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// import AppEx from "./Udamy_Exercises/AppEx.jsx";
// import "./Udamy_Exercises/AppEx.css";

// 1. Load Root div
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);

// 2. Creating App Root element
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));  // <App />

// ReactDOM.createRoot(entryPoint).render(<AppEx />);
