import { createTheme } from "@mui/material";
import { bgColor, TextColor } from "./colors";

export const fonts = {
  en: "Nunito, Vazirmatn, Poppins, sans-serif",
  fa: "Nunito, Vazirmatn, IRANSans, Vazir, Tahoma, sans-serif",
};

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
          borderColor: "#fff",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
        input: {
          color: "#fff",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#fff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#0E1828",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#15233A",
          },
          "&.Mui-selected": {
            backgroundColor: "#15233A",
            "&:hover": {
              backgroundColor: "#15233A",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff",
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
