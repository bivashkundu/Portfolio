import "@mui/material/styles";
import { Palette, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      white100: string;
      // Add all other custom keys here
    };
  }

  interface PaletteOptions {
    customColors?: {
      white100: string;
      // Add all other custom keys here
    };
  }
}

// Optional: for useTheme and styled components
declare module "@mui/material" {
  interface Theme {
    palette: Palette;
  }
  interface ThemeOptions {
    palette?: PaletteOptions;
  }
}
