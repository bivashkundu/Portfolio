/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import assest from "@/json/assest";
import {
  demotechCardList,
  gradiantColors,
  solidColors
} from "@/json/mock/common.mock";
import { AboutSectionWrap } from "@/styles/StyledComponents/HomeStyled";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import TechCard from "../TechCard/TechCard";

const AboutSection: React.FC = () => {
  return (
    <AboutSectionWrap className="cmn-sec-class">
      <Container fixed maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item lg={6.5}>
            <Box className="left-caption">
              <figure>
                <Image
                  src={assest.about}
                  width={440}
                  height={530}
                  alt="thumb"
                />
              </figure>
            </Box>
          </Grid>
          <Grid item lg={5.5}>
            <Box className="offset-about-content">
              <Box className="about-title">
                <Typography variant="h2">
                  <span className="text-secondary">About Me</span>Every{" "}
                  <span className="text-primary">Great Design</span> Begin with
                  <br />
                  an Even Better story
                </Typography>
                <Typography variant="body1">
                  Hey there! I'm an HTML developer who loves building fast,
                  scalable, and maintainable web apps. With a solid grip on
                  HTML5, CSS, and JavaScript, I create semantic and accessible
                  markup that really brings designs to life. I'm all about
                  writing clean, efficient, and standards-compliant code that
                  follows the latest web development best practices. I have a
                  keen eye for detail and a passion for problem-solving, always
                  looking to improve my skills and stay updated with the latest
                  web trends and technologies.
                </Typography>
              </Box>
              <Grid container spacing={3.5}>
                {demotechCardList.map((__item, idx) => (
                  <Grid item lg={4} key={idx}>
                    <TechCard
                      {...__item}
                      color={gradiantColors[idx % gradiantColors.length]}
                      solidColor={solidColors[idx % solidColors.length]}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AboutSectionWrap>
  );
};

export default AboutSection;
