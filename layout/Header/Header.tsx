/* eslint-disable react/no-unescaped-entities */
import assest from "@/json/assest";
import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrapper";
import {
  AppBar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Stack
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const navItems = ["Home", "About", "Resume", "Service", "Project", "Contact"];

const Header = () => {
  return (
    <HeaderWrap>
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="custom-appbar"
      >
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
                <Box className="offcanvas-toggle">
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
    </HeaderWrap>
  );
};

export default Header;
