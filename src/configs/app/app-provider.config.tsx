import { Button, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { FC, ReactNode, useEffect, useMemo } from "react";
import theme, { fonts } from "../theme/mui.theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "./i18n";
import { useTranslation } from "react-i18next";
import useLanguageStore from "../../store/lang/lang.store";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

type AppProviderProps = { children: ReactNode };

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const ltrCache = createCache({
  key: "mui",
});

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const { lang, setLang } = useLanguageStore();
  const { i18n } = useTranslation();

  const queryClient = new QueryClient();

  const direction = lang === "fa" ? "rtl" : "ltr";

  const muiTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        typography: {
          fontFamily: fonts[lang],
        },
        direction,
      }),
    [lang]
  );

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = direction;
  }, [lang, i18n, direction]);

  return (
    <CacheProvider value={lang === "fa" ? rtlCache : ltrCache}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <Button onClick={() => setLang(lang === "en" ? "fa" : "en")}>
            t
          </Button>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AppProvider;
