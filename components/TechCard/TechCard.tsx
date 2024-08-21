import { TechCardPaperProps } from "@/interface/commonAll.interfaces";
import { OuterCardGradiant } from "@/styles/StyledComponents/HomeStyled";
import { Stack, Typography } from "@mui/material";
import React from "react";

const TechCard: React.FC<TechCardPaperProps & { solidColor: string }> = ({
  count,
  text,
  color,
  solidColor,
  ...props
}) => {
  return (
    <OuterCardGradiant color={color} {...props}>
      <Stack alignItems="center" justifyContent="center" className="prop-card">
        <Typography variant="h4">{count}%</Typography>
        <Typography variant="body1" sx={{ color: solidColor }}>
          {text}
        </Typography>
      </Stack>
    </OuterCardGradiant>
  );
};

export default TechCard;
