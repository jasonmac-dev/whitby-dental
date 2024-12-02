import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Serif', 'Georgia', 'Times New Roman', serif",
    h1: {
      fontSize: "1.2rem", // Default font size
      fontWeight: 700,
      lineHeight: 1.2,
      [`@media (min-width:600px)`]: {
        fontSize: "2rem", // Medium screens and above
      },
      [`@media (min-width:960px)`]: {
        fontSize: "3rem", // Large screens and above
      },
    },
    h2: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.4,
      [`@media (min-width:600px)`]: {
        fontSize: "1.2rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1.5",
      },
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.4,
      [`@media (min-width:600px)`]: {
        fontSize: "1.2rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.5,
      [`@media (min-width:600px)`]: {
        fontSize: "1.75rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "2rem",
      },
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.6,
      [`@media (min-width:600px)`]: {
        fontSize: "1.5rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1.75rem",
      },
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.6,
      [`@media (min-width:600px)`]: {
        fontSize: "1.25rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: "500",
      lineHeight: 1.75,
      [`@media (min-width:600px)`]: {
        fontSize: "1rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1.2rem",
      },
      fontFamily: "'Karla',Helvetica,Arial,Lucida,sans-serif",
    },
    body2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.6,
      [`@media (min-width:600px)`]: {
        fontSize: "0.875rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1rem",
      },
      fontFamily: "'Karla',Helvetica,Arial,Lucida,sans-serif",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      [`@media (min-width:600px)`]: {
        fontSize: "0.875rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1rem",
      },
      fontFamily: "'Karla',Helvetica,Arial,Lucida,sans-serif",
    },
    subHeading: {
      fontSize: "1rem",
      fontWeight: 700,
      lineHeight: 1.3,
      [`@media (min-width:600px)`]: {
        fontSize: "2.5rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "3rem",
      },
    }
  },
  palette: {
    text: {
      primary: "#ffffff", // Default text color
      secondary: "#cccccc", // Secondary text color
    },
    custom: {
      Primary1: "white",
      Primary2: "#E3E5E1",
      textFaded: "#052639"
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white", // Set the default color for Typography components
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Karla',Helvetica,Arial,Lucida,sans-serif",
          backgroundColor: "",
          color: "white",
          "&:hover": {
            backgroundColor: "", // Hover state color
            fontWeight: 400,
            lineHeight: 1.6,
            [`@media (min-width:600px)`]: {
              fontSize: "0.875rem",
            },
            [`@media (min-width:960px)`]: {
              fontSize: "1rem",
            },
          },
        },
      },
    },
  },
});
export default theme;
