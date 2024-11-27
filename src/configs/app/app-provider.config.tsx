import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { FC, ReactNode, useEffect } from "react";
import theme, { fonts } from "../theme/mui.theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./i18n";
import { useTranslation } from "react-i18next";
import useLanguageStore from "../../store/lang/lang.store";

type AppProviderProps = { children: ReactNode };

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const { lang, setLang } = useLanguageStore();
  const { i18n } = useTranslation();

  const queryClient = new QueryClient();

  const muiTheme = createTheme({
    ...theme,
    typography: {
      fontFamily: fonts[lang],
    },
  });

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <Button onClick={() => setLang(lang === "en" ? "fa" : "en")}>
            aa
          </Button>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default AppProvider;
