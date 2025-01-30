import  React  from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// import AppEx from "./Udamy_Exercises/AppEx.jsx";
// import "./Udamy_Exercises/AppEx.css";

const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);
ReactDOM.createRoot(entryPoint).render(React.createElement(App));
ReactDOM.createRoot(entryPoint).render(<AppEx />);
