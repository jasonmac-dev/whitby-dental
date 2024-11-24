import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { GoogleMapsLoader } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleMapsLoader>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </GoogleMapsLoader>
);
