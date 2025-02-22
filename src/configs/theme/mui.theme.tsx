import { createTheme } from "@mui/material";
import {
  DarkBgColor,
  darkColors,
  DarkTextColor,
  LightBgColor,
  lightColors,
  LightTextColor,
} from "./colors";
import { Theme } from "../../store/lang/lang.type";

export const fonts = {
  en: "Nunito, Vazirmatn, Poppins, sans-serif",
  fa: "Nunito, Vazirmatn, IRANSans, Vazir, Tahoma, sans-serif",
};

const theme = (theme: Theme) =>
  createTheme({
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
      primary: theme === "light" ? lightColors.primary : darkColors.primary,
      secondary:
        theme === "light" ? lightColors.secondary : darkColors.secondary,
      background: theme === "light" ? LightBgColor : DarkBgColor,
      text: theme === "light" ? LightTextColor : DarkTextColor,
    },
  });

export default theme;
