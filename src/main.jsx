import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CountriesContextProvider } from "./providers/CountryProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CountriesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountriesContextProvider>
  </React.StrictMode>
);
