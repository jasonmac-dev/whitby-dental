import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { GoogleMapsProvider } from "./context/GoogleMapsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleMapsProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </GoogleMapsProvider>
);
