import { ExperienceCardProps } from "@/interface/commonAll.interfaces";
import assest from "@/json/assest";
import { ExperienceCardWrap } from "@/styles/StyledComponents/ExperienceCardStyled";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  year,
  present,
  name,
  address
}) => {
  return (
    <ExperienceCardWrap elevation={0}>
      <Grid container spacing={1} alignItems="center">
        <Grid item lg={1.5}>
          <figure>
            <Image src={assest.ofcIcon} width={80} height={80} alt="logo" />
          </figure>
        </Grid>
        <Grid item lg={3.5}>
          <Typography variant="body1" className="year-text">
            {year} {present && <span className="text-secondary">Present</span>}
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h4">{name}</Typography>
        </Grid>
        <Grid item lg={3}>
          <Typography variant="body1" className="address">
            {address}
          </Typography>
        </Grid>
      </Grid>
    </ExperienceCardWrap>
  );
};

export default ExperienceCard;
