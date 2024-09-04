import { BoxProps } from "@mui/material";

export interface TechCardPaperProps extends BoxProps {
  count: number;
  text: string;
  color?: string;
}

export interface PageHeadingProps extends BoxProps {
  shortTitle?: string;
  heading: string;
  primaryText: string;
  endText?: string;
  titile: string;
}

export interface ExperienceCardProps {
  year: string;
  present?: boolean;
  name: string;
  address: string;
}

export interface MousePosition {
  x: number;
  y: number;
}
