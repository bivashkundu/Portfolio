/* eslint-disable mui-path-imports/mui-path-imports */
//  MUI pallete colors will be listed here

import { PaletteMode, PaletteOptions } from "@mui/material";

export const primaryColors = {
  primary: "#41b362",
  primary1: "#279747",
  primary_600: "#131313",
  secondary: "#FFE600",
  secondaryBorder: "#F380A5",
  info: "#7CD1D2",
  infoBorder: "#67C1C2",
  disabledBg: "#DBE0E8",
  textDisabled: "#8F98A8",
  errorMain: "#EB4444",
  errorLight: "#FFECF2",
  white: "#fff",
  black: "#000",
  bodyColor: "#F4F6F8",
  mainFontColor: "#585858",
  borderprimary: "#DBE0E8",
  warning_color: "#FFEFD7",
  success_color: "#D4FEFF",
  text_success: "#3C8183",
  warning_text: "#6F4F1F",
  deepGreen: "#3c8183",
  lightGreen: "#D4FEFF",
  danger_text: "#9B3858",
  warningMain: "rgba(255, 167, 33, 1)",
  pendingColor: "#FFEFD7",
  pendingTextColor: "#6F4F1F",
  textDanger: "#9B3858",
  dangerColor: "#FFECF2",
  chipErrorBg: "#FFECF2",
  chipErrorText: "#9B3858",
  cardShadow: "#0707070F",
  tableshadow: "rgba(7, 7, 7, 0.06)",
  secondaryFont: "#c0c0c2",
  tertiaryFont: "#585858",
  color060606: "#060606",
  colorF6EFF8: "#F6EFF8",
  colorfdf8ff: "#fdf8ff",
  color2F3240: "#2F3240",
  color1F1E1D: "#1F1E1D",
  color282828: "#282828",
  color494949: "#494949",
  color111111: "#111111",
  color232221: "#232221",
  color373737: "#373737"
};

export const pallete = (mode: PaletteMode): PaletteOptions => {
  return {
    mode,
    background: {
      default: mode === "light" ? "#f5f8fa" : "#000",
      paper: mode === "light" ? "#fff" : "#000"
    },
    //global
    primary: {
      main: primaryColors.primary,
      dark: primaryColors.primary_600
    },
    secondary: {
      main: primaryColors.secondary
    },
    info: {
      main: primaryColors.info
    },
    error: {
      main: primaryColors.errorMain
    },
    warning: {
      main: primaryColors.warningMain
    },

    text: {
      primary: primaryColors.disabledBg
    },
    common: {
      black: "#000",
      white: "#fff"
    }
  };
};
