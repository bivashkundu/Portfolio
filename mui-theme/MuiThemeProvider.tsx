import React, { createContext, useMemo, useState } from "react";
// material-ui
import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MuiThemeOptions } from "./_muiTheme";

// Mui theme set up provider for whole application

export const ThemeModeContext = createContext({
  mode: "light" as "light" | "dark",
  toggleMode: () => {}
});

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const themeOptions = useMemo(() => {
    return MuiThemeOptions(mode);
  }, [mode]);

  const theme = useMemo(() => createTheme(themeOptions), [themeOptions]);

  const contextValue = useMemo(() => ({ mode, toggleMode }), [mode]);

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ThemeModeContext.Provider>
  );
};

export default MuiThemeProvider;
