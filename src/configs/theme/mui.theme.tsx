import { createTheme } from "@mui/material";
import { bgColor, TextColor } from "./colors";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          "& .MuiInput-root": {
            // Bottom border
            "&:before": {
              borderColor: "#FFF",
              borderWidth: "0px 0px 2px 0px",
            },
          },
          // Label
          "& .MuiInputLabel-standard": {
            fontSize: "14px",
            color: "#fff",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#737478",
            color: "#ffffff",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      100: "#F2F6FB",
      200: "#E5EDF7",
      300: "#C7D9EE",
      400: "#A5C3E5",
      500: "#79AADC",
      600: "#2C8DD2",
      700: "#277EBC",
      800: "#226DA3",
      900: "#1C5985",
      main: "#2C8DD2",
    },
    secondary: {
      100: "#F2F2F2",
      200: "#E4E4E5",
      300: "#C6C6C7",
      400: "#A2A2A4",
      500: "#737478",
      600: "#0E1828",
      700: "#0D1524",
      800: "#0B131F",
      900: "#090F19",
      main: "#0E1828",
    },

    background: bgColor,
    text: TextColor,
  },
});

export default theme;