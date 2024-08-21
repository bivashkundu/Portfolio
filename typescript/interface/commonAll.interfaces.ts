import { BoxProps } from "@mui/material";

export interface TechCardPaperProps extends BoxProps {
  count: number;
  text: string;
  color?: string;
}
