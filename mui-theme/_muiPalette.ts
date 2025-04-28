/* eslint-disable mui-path-imports/mui-path-imports */
//  MUI pallete colors will be listed here

import { Palette, PaletteMode, PaletteOptions } from "@mui/material";

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
  color373737: "#373737",
  secondaryBodyBg: "#1D1D1D"
};

export const pallete = (mode: PaletteMode): PaletteOptions => {
  return {
    mode,
    background: {
      default: mode === "light" ? "#FFFFFF" : "#000000",
      paper: mode === "light" ? "#FFFFFF" : "#1d252c"
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
      black: "#000000",
      white: "#FFFFFF"
    }
  };
};

export const colorModePallete = (mode: Palette["mode"]): Palette => {
  const whiteColor = "#FFFFFF";
  const lightColor = "#2F2B3D"; // Hex equivalent of '47, 43, 61'
  const darkColor = "#334F4D"; // Hex equivalent of '208, 212, 241'
  const darkPaperBgColor = "#2F3349";
  const mainColor = mode === "light" ? darkColor : whiteColor;
  const defaultBgColor = whiteColor;
  const darkCommon = "#202221";
  const primaryMain = "#22c55e";
  const secondaryMain = "#fac241";

  // Convert RGBA to Hex with opacity
  const hexWithOpacity = (hex: string, opacity: number) => {
    const alpha = Math.round(opacity * 255)
      .toString(16)
      .padStart(2, "0");

    return `${hex}${alpha}`;
  };

  return {
    customColors: {
      dark: mode === "light" ? darkColor : whiteColor,
      main: mainColor,
      light: lightColor,
      lightPaperBg: mode === "light" ? whiteColor : darkCommon,
      darkPaperBg: darkPaperBgColor,
      bodyBg: mode === "light" ? "#F8F7FA" : "#25293C", // Same as palette.background.default but doesn't consider bordered skin
      trackBg: mode === "light" ? "#F1F0F2" : "#363B54",
      avatarBg: mode === "light" ? "#DBDADE" : "#4A5072",
      tableHeaderBg: mode === "light" ? "#F6F6F7" : "#4A5072",
      placeText: "#576E6E",
      textPrimary: mode === "light" ? "#2A3F3E" : whiteColor,
      primary500: hexWithOpacity(primaryMain, 0.05),
      secondary700: hexWithOpacity(secondaryMain, 0.07)
    },
    mode: mode,
    primary: {
      light: "#8479F2",
      main: primaryMain,
      dark: "#655BD3",
      contrastText: whiteColor
    },
    secondary: {
      light: "#B2B4B8",
      main: secondaryMain,
      dark: "#C0F060",
      contrastText: whiteColor
    },
    error: {
      light: "#ED6F70",
      main: "#EA5455",
      dark: "#CE4A4B",
      contrastText: whiteColor
    },
    warning: {
      light: "#FFAB5A",
      main: "#FF9F43",
      dark: "#E08C3B",
      contrastText: whiteColor
    },
    info: {
      light: "#1FD5EB",
      main: "#00CFE8",
      dark: "#00B6CC",
      contrastText: whiteColor
    },
    success: {
      light: "#42CE80",
      main: "#28C76F",
      dark: "#23AF62",
      contrastText: whiteColor
    },
    grey: {
      50: mode === "light" ? "#FAFAFA" : "#0f1411",
      100: mode === "light" ? "#F5F5F5" : primaryMain,
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#72849a",
      A100: "#F5F5F5",
      A200: mode === "light" ? "#FAFAFA" : "#4a4a4a",
      A400: mode === "light" ? "#f4f6f9" : "#0f1411",
      A700: "#616161"
    },
    text: {
      primary: mainColor,
      secondary: hexWithOpacity(mainColor, 0.68),
      disabled: hexWithOpacity(mainColor, 0.42)
    },
    divider: hexWithOpacity(mainColor, 0.16),
    background: {
      paper: mode === "light" ? whiteColor : darkPaperBgColor,
      default: defaultBgColor
    },
    action: {
      active: hexWithOpacity(mainColor, 0.54),
      hover: hexWithOpacity(mainColor, 0.04),
      selected: hexWithOpacity(mainColor, 0.06),
      selectedOpacity: 0.06,
      disabled: hexWithOpacity(mainColor, 0.26),
      disabledBackground: hexWithOpacity(mainColor, 0.12),
      focus: hexWithOpacity(mainColor, 0.12)
    }
  } as Palette;
};
