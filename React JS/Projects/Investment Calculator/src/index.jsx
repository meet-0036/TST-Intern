import { StrictMode } from "react";

import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Run each component twice
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
