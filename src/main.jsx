import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./figma-assets.css";
import "./advisor-view.css";
import "./collaboration-preview.css";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
