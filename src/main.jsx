import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NavMenuContextProvider } from "./Context/navmenucontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavMenuContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavMenuContextProvider>
  </StrictMode>
);
