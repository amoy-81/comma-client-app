import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC, ReactNode } from "react";
import theme from "../theme/mui.theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type AppProviderProps = { children: ReactNode };

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default AppProvider;
