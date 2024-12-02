import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { GoogleMapsProvider } from "./context/GoogleMapsContext";
import { HelmetProvider } from "react-helmet-async";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <GoogleMapsProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </GoogleMapsProvider>
  </HelmetProvider>
);
