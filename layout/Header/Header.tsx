/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */
import assest from "@/json/assest";
import { sociallinks } from "@/json/mock/common.mock";
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
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Resume", link: "#resume" },
  { name: "Service", link: "#service" },
  { name: "Project", link: "#project" },
  { name: "Contact", link: "#contact" }
];

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleDrawerClick = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.link)
      );
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);

      sections.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });

      return () => {
        sections.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      };
    };

    handleScroll();

    return () => {
      setActiveSection("");
    };
  }, []);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 0,
        behavior: "smooth"
      });
    }
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
                    <Link
                      href={item.link}
                      onClick={(e) => handleClick(e, item.link)}
                      className={
                        activeSection === item.link.slice(1) ? "active" : ""
                      }
                    >
                      {item.name}
                    </Link>
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
