import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NavMenuContextProvider } from "./Context/navmenucontext.jsx";
import { Provider } from "react-redux";
import store from "./palamuru/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <NavMenuContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NavMenuContextProvider>
    </StrictMode>
  </Provider>
);
