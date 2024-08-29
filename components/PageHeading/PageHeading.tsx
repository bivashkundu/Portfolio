import { PageHeadingProps } from "@/interface/commonAll.interfaces";
import { PageHeadingBox } from "@/styles/StyledComponents/PageHeadingStyled";
import { Typography } from "@mui/material";
import React from "react";

const PageHeading: React.FC<PageHeadingProps> = ({
  heading,
  primaryText,
  endText,
  titile,
  ...other
}) => {
  return (
    <PageHeadingBox {...other}>
      <Typography variant="h3">
        {heading} <span className="text-primary">{primaryText}</span> {endText}
      </Typography>
      <Typography variant="body1">{titile}</Typography>
    </PageHeadingBox>
  );
};

export default PageHeading;
