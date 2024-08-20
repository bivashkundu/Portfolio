import assest from "@/json/assest";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Link from "next/link";
import { List, ListItem } from "@mui/material";
import path from "path";
import { useRouter } from "next/router";

const FooterWrap = styled(Box)`
  padding: 45px 0;
  .ftr-list {
    display: flex;
    align-items: center;
    padding: 0;
    @media (max-width: 1199px) {
      justify-content: center;
      margin: 8px 0;
      flex-wrap: wrap;
    }
    li {
      width: auto;
      margin-right: 35px;
      @media (max-width: 899px) {
        margin: 0 17px;
      }
      &:last-child {
        margin-right: 0;

        @media (max-width: 899px) {
          margin-right: 17px;
        }
      }
      a {
        font-weight: 400;
        font-size: 15px;
        color: var(--color3A4950);
        text-transform: capitalize;
        &:hover {
          color: var(--black);
        }
        &.active{
          color: var(--black);
        }
      }
    }
  }
  .ftr-logo {
    margin-right: 28px;
    line-height: 0;
    @media (max-width: 1199px) {
      max-width: 180px;
      margin: 0 auto;
    }
  }
  .social-list {
    display: flex;
    align-items: center;
    padding: 0;
    margin-left: 50px;
    @media (max-width: 1199px) {
      justify-content: center;
      margin-left: 0px;
      margin-bottom: 15px;
    }
    li {
      width: auto;
      margin-right: 20px;
      
      &:last-child {
        margin-right: 0;
      }
      img {
        &:hover {
          filter: brightness(0);
        }
        @media (max-width: 991px) {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .copy {
    margin-left: auto;

    font-size: 14px;
    color: var(--color3A4950);

    a {
      color: var(--color3A4950);
      &:hover {
        color: var(--black);
      }
    }
  }
  .ftr-wrapper {
    display: flex;
    align-items: center;
    @media (max-width: 1199px) {
      display: block;
      text-align: center;
    }
  }
`;

const navItems = [
  {
    name: "home",
    route: "/",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "Products",
    route: "/products",
  },
  {
    name: "Package",
    route: "/package",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];



const Footer = () => {
  const navItems = [
    {
      name: "home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Products",
      route: "/products",
    },
    {
      name: "Package",
      route: "/package",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];
  const router = useRouter();
  return (
    <>
      <FooterWrap>
        <Container fixed>
          <Box className="ftr-wrapper">
            <Link href="/" className="ftr-logo">
              <Image src={assest.logo_img} alt="" width={210} height={34} />
            </Link>

            <List className="ftr-list">
              {navItems.map((item: any, index: number) => (
                <ListItem disablePadding>
                  <Link href={item?.route} key={item.name} className={router.pathname === item.route ? "active" : ""}>
                    {item?.name}
                  </Link>
                </ListItem>
              ))}
            </List>
 
            <Box className="copy">
              © 2023 <Link href="/">Career Utility.</Link> All Rights Reserved.
            </Box>
          </Box>
        </Container>
      </FooterWrap>
    </>
  );
};

export default Footer;
