/* eslint-disable react/no-array-index-key */
import { MyProjectsWrap } from "@/styles/StyledComponents/HomeStyled";
import { Box, Container, Grid } from "@mui/material";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import React, { useLayoutEffect, useRef } from "react";
import { myworkData } from "@/json/mock/common.mock";
import React from "react";
import PageHeading from "../PageHeading/PageHeading";
import ProjectCard from "../ProjectCard/ProjectCard";

// gsap.registerPlugin(ScrollTrigger);

const MyProjects: React.FC = () => {
  //   const slider = useRef<HTMLDivElement | null>(null);

  //   useLayoutEffect(() => {
  //     const ctx = gsap.context(() => {
  //       const panels = gsap.utils.toArray<HTMLDivElement>(".panel");
  //       gsap.to(panels, {
  //         xPercent: -100 * (panels.length - 1),
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: slider.current,
  //           pin: true,
  //           scrub: 1,
  //           snap: 1 / (panels.length - 1),
  //           end: () => `+=${slider.current?.offsetWidth || 0}`
  //           //   markers: true
  //         }
  //       });
  //     }, slider);

  //     return () => ctx.revert();
  //   }, []);
  return (
    <MyProjectsWrap className="cmn-sec-class">
      <Container fixed maxWidth="xl">
        <PageHeading
          shortTitle="Latest Work"
          heading="Explore my Popular"
          primaryText=" Projects"
          titile="Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system"
        />
        <Box className="project-section">
          <Grid container spacing={3}>
            {myworkData.map((__item, index) => (
              <Grid item lg={4} key={index}>
                <ProjectCard {...__item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      {/* <div ref={slider} className="container">
        <div className="description panel blue">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow" />
            </div>
          </div>
        </div>
        <div className="panel red">ONE</div>
        <div className="panel orange">TWO</div>
        <div className="panel purple">THREE</div>
      </div> */}
    </MyProjectsWrap>
  );
};

export default MyProjects;
