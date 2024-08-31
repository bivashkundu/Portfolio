/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import assest from "@/json/assest";
import {
  demotechCardList,
  gradiantColors,
  solidColors
} from "@/json/mock/common.mock";
import { AboutSectionWrap } from "@/styles/StyledComponents/HomeStyled";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import {
  Box,
  BoxProps,
  Container,
  Grid,
  InputLabel,
  Stack,
  Typography
} from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import TechCard from "../TechCard/TechCard";

const AboutSection: React.FC<BoxProps> = ({ ...props }) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(".zoom-scale", {
      transform: "scale(0.5)",
      scrollTrigger: {
        trigger: ".left-caption",
        start: "top 10%",
        end: "bottom top",
        scrub: 1
      },
      duration: 1,
      ease: "none"
    });
  }, []);

  return (
    <AboutSectionWrap className="cmn-sec-class" {...props}>
      <Container fixed maxWidth="xl">
        <Grid container alignItems="center" className="zoom-scale">
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
              <Box className="get-touch">
                <Grid container spacing={2}>
                  <Grid item lg={7}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      flexWrap="wrap"
                      className="touct-item"
                    >
                      <i>
                        <MailIcon />
                      </i>
                      <Box className="touch-right">
                        <InputLabel>Email</InputLabel>
                        <Link href="mailto:myself.bivash@gmail.com">
                          myself.bivash@gmail.com
                        </Link>
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item lg={5}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      flexWrap="wrap"
                      className="touct-item"
                    >
                      <i>
                        <CallIcon />
                      </i>
                      <Box className="touch-right">
                        <InputLabel>Make a Call</InputLabel>
                        <Link href="tel:+918910120822">+91 8910120822</Link>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
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
