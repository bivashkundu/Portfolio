declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      dark: string;
      main: string;
      light: string;
      bodyBg: string;
      trackBg: string;
      avatarBg: string;
      darkPaperBg: string;
      lightPaperBg: string;
      tableHeaderBg: string;
      placeText: string;
      textPrimary: string;
      primary500: string;
      secondary700: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      dark?: string;
      main?: string;
      light?: string;
      bodyBg?: string;
      trackBg?: string;
      avatarBg?: string;
      darkPaperBg?: string;
      lightPaperBg?: string;
      tableHeaderBg?: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    tonal: true;
  }
}

declare module "@mui/material/ButtonGroup" {
  interface ButtonGroupPropsVariantOverrides {
    tonal: true;
  }
}

export {};
