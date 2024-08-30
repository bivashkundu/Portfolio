import { MyProjectsWrap } from "@/styles/StyledComponents/HomeStyled";
import { Container } from "@mui/material";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import React, { useLayoutEffect, useRef } from "react";
import React from "react";
import PageHeading from "../PageHeading/PageHeading";

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
