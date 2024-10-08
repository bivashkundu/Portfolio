/* eslint-disable init-declarations */
/* eslint-disable react/no-array-index-key */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable prefer-exponentiation-operator */
import { MousePosition } from "@/interface/commonAll.interfaces";
import assest from "@/json/assest";
import { sociallinks } from "@/json/mock/common.mock";
import { HeroSectionWrap } from "@/styles/StyledComponents/HomeStyled";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  Box,
  BoxProps,
  Container,
  Grid,
  List,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

const HeroSection: React.FC<BoxProps> = ({ ...props }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<MousePosition>({ x: 0, y: 0 });
  const speed = 0.1;

  const itemsRef = useRef<
    Array<{
      element: HTMLElement;
      shiftValue: number;
      xSet: (value: number) => void;
      ySet: (value: number) => void;
      currentX: number;
      currentY: number;
    }>
  >([]);

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout | undefined;

    return (...args: any[]) => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    const items = gsap.utils.toArray(
      wrapper.querySelectorAll(".for-ani")
    ) as HTMLElement[];

    itemsRef.current = items.map((element) => ({
      element,
      shiftValue: Number(element.getAttribute("data-value")) / 1500,
      xSet: gsap.quickSetter(element, "x", "px") as (value: number) => void,
      ySet: gsap.quickSetter(element, "y", "px") as (value: number) => void,
      currentX: 0,
      currentY: 0
    }));

    const mouseMoveHandler = debounce((e: MouseEvent) => {
      setMouse({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2
      });
    }, 10);

    wrapper.addEventListener("mousemove", mouseMoveHandler);

    const updateAnimation = () => {
      const dt = gsap.ticker.deltaRatio();
      const factor = 1.0 - Math.pow(1.0 - speed, dt);

      itemsRef.current.forEach((item) => {
        item.currentX += (item.shiftValue * mouse.x - item.currentX) * factor;
        item.currentY += (item.shiftValue * mouse.y - item.currentY) * factor;
        item.xSet(item.currentX);
        item.ySet(item.currentY);
      });

      requestAnimationFrame(updateAnimation);
    };

    updateAnimation();

    return () => {
      wrapper.removeEventListener("mousemove", mouseMoveHandler);
      gsap.ticker.remove(updateAnimation);
    };
  }, [mouse, speed]);

  const fadeInLeftRef = useRef<HTMLDivElement>(null);
  const fadeInRightRef = useRef<HTMLDivElement>(null);
  const fadeInUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fadeInLeftElement = fadeInLeftRef.current;
    const fadeInRightElement = fadeInRightRef.current;
    const fadeInUpElement = fadeInUpRef.current;

    const fadeInAnimation = () => {
      if (fadeInLeftElement) {
        gsap.fromTo(
          fadeInLeftElement,
          { opacity: 0, x: -100 },
          { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
        );
      }

      if (fadeInRightElement) {
        gsap.fromTo(
          fadeInRightElement,
          { opacity: 0, x: 100 },
          { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
        );
      }

      if (fadeInUpElement) {
        gsap.fromTo(
          fadeInUpElement,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
        );
      }
    };

    fadeInAnimation();
  }, []);

  return (
    <HeroSectionWrap ref={wrapperRef} className="cmn-sec-class" {...props}>
      <Container fixed maxWidth="xl">
        <Grid container alignItems="center">
          <Grid item lg={4.5} ref={fadeInLeftRef}>
            <Box className="static-hero-inner">
              <Typography variant="h1">
                <span>Hello,</span> I am Bivash.
              </Typography>
              <Typography variant="h3">
                <Typewriter
                  options={{
                    strings: ["HTML Developer", "Professional Coder"],
                    autoStart: true,
                    loop: true
                  }}
                />
              </Typography>
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
                  {sociallinks.map((data, index) => (
                    <ListItem key={index}>
                      <Link
                        rel="noreferrer"
                        aria-label="testlabel"
                        href={data.href}
                      >
                        {data.icon}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={4.5} ref={fadeInUpRef}>
            <Box className="static-hero-right">
              <Box className="static-hero-img">
                <Image
                  src={assest.avatarMain}
                  width={600}
                  height={600}
                  alt="main"
                  className="main-round-img"
                />
                <Box className="icon-1 floating-item for-ani" data-value="-15">
                  <Image
                    src={assest.reactJs}
                    width={70}
                    height={70}
                    alt="React.js"
                  />
                </Box>
                <Box className="icon-2 floating-item for-ani" data-value="-15">
                  <Image src={assest.html} width={70} height={70} alt="HTML" />
                </Box>
                <Box className="icon-3 floating-item for-ani" data-value="-15">
                  <Image src={assest.css} width={70} height={70} alt="CSS" />
                </Box>
                <Box className="icon-4 for-ani" data-value="-15">
                  <VerifiedUserIcon />
                  <Box className="client-project">
                    <Typography variant="body1">30+</Typography>
                    <Typography variant="caption">Complete Projects</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} ref={fadeInRightRef}>
            <List className="about-exprience-wrap">
              <ListItem>
                <Typography variant="body1">5+</Typography>
                <Typography variant="caption">Years of Experience</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">30+</Typography>
                <Typography variant="caption">Project Complete</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body1">98%</Typography>
                <Typography variant="caption">Client Satisfactions</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </HeroSectionWrap>
  );
};

export default HeroSection;
