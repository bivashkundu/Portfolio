import assest from "@/json/assest";
import { HeroSectionWrap } from "@/styles/StyledComponents/HomeStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const sociallinks = [<LinkedInIcon />, <FacebookIcon />, <InstagramIcon />];

const HeroSection: React.FC = () => {
  return (
    <HeroSectionWrap>
      <Container fixed maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item lg={5}>
            <Box className="static-hero-inner">
              <Typography variant="h1">
                <span>Hello,</span>I am Bivash.
              </Typography>
              <Typography variant="h3">HTML Developer</Typography>
              <Typography variant="body1">
                I am Working With UI/UX, HTML, CSS, SCSS, J-QUERY, Bootstrap,
                JAVASCRIPT, REACT.JS, NEXT.JS
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="nowrap"
                className="btm-stack"
              >
                <CustomButtonPrimary
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowRightAltIcon />}
                >
                  Download Resume
                </CustomButtonPrimary>
                <List className="social-links">
                  {sociallinks.map((data) => (
                    <ListItem>
                      <Link href="/">{data}</Link>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={7}>
            <Box className="static-hero-right">
              <Box className="static-hero-img">
                <Image
                  src={assest.avatarMain}
                  width={600}
                  height={600}
                  alt="main"
                  className="main-round-img"
                />
                <Box className="icon-1 floating-item">
                  <Image
                    src={assest.reactJs}
                    width={70}
                    height={70}
                    alt="main"
                  />
                </Box>
                <Box className="icon-2 floating-item">
                  <Image src={assest.html} width={70} height={70} alt="main" />
                </Box>
                <Box className="icon-3 floating-item">
                  <Image src={assest.css} width={70} height={70} alt="main" />
                </Box>
                <Box className="icon-4">
                  <VerifiedUserIcon />
                  <Box className="client-project">
                    <Typography variant="body1">40+</Typography>
                    <Typography variant="caption">Complete Projects</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className="shape-1">
        <Image src={assest.line1} width={866} height={515} alt="line1" />
      </Box>
      <Box className="shape-2">
        <Image src={assest.line2} width={1238} height={858} alt="line2" />
      </Box>
    </HeroSectionWrap>
  );
};

export default HeroSection;
