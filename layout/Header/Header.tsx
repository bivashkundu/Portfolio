/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import { sociallinks } from "@/components/HeroSection/HeroSection";
import assest from "@/json/assest";
import {
  HeaderDrawer,
  HeaderWrap
} from "@/styles/StyledComponents/HeaderWrapper";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = ["Home", "About", "Resume", "Service", "Project", "Contact"];

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerClick = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <HeaderWrap>
      <AppBar component="nav" elevation={0} className="custom-appbar">
        <Container fixed maxWidth="xl">
          <Grid container alignItems="center">
            <Grid item xs={6} lg={2}>
              <Link href="/">
                <Image
                  src={assest.logo_img}
                  width={200}
                  height={76}
                  alt="logo"
                />
              </Link>
            </Grid>
            <Grid item xs={6} lg={7.5}>
              <List className="header-menu">
                {navItems.map((item) => (
                  <ListItem>
                    <Link href="/">{item}</Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={6} lg={2.5}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                className="lets-talk"
              >
                Let's Talk
                <Box
                  className="offcanvas-toggle"
                  component={Button}
                  onClick={handleDrawerClick}
                >
                  <Box className="toggle-inner">
                    <span />
                    <span />
                    <span />
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
      <HeaderDrawer
        open={openDrawer}
        onClose={handleDrawerClick}
        anchor="right"
        PaperProps={{ className: "drawer-paper-root" }}
      >
        <IconButton className="close-drawer" onClick={handleDrawerClick}>
          <CloseIcon />
        </IconButton>
        <Box className="drawer-contant">
          <Typography variant="h5">Let's Connect</Typography>
          <Typography variant="body1">
            Feel free to reach out to discuss ideas, or just have a friendly
            chat.
          </Typography>
          <Stack className="btm-media-sec">
            <Link href="mailto:myself.bivash@gmail.com">
              myself.bivash@gmail.com
            </Link>
            <List className="social-links" disablePadding>
              {sociallinks.map((data, index) => (
                <ListItem key={index} disablePadding>
                  <Link href={data.href}>{data.icon}</Link>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Box>
      </HeaderDrawer>
    </HeaderWrap>
  );
};

export default Header;
