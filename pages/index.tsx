import AboutSection from "@/components/HeroSection/AboutSection";
import Contact from "@/components/HeroSection/Contact";
import HeroSection from "@/components/HeroSection/HeroSection";
import MyProjects from "@/components/HeroSection/MyProjects";
import WorkExperience from "@/components/HeroSection/WorkExperience";
import Wrapper from "@/layout/wrapper/Wrapper";
import { GsapAnimationStyled } from "@/themes/_gsap_utils";
import { Box } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => {
      const sections = gsap.utils.toArray(".cmn_sec");

      sections.forEach((elem: any, index: number) => {
        setTimeout(() => {
          gsap.timeline({
            scrollTrigger: {
              trigger: elem,
              start: "top bottom",
              end: () => "bottom bottom",
              scrub: 1,
              onUpdate: (self) => {
                if (self.progress === 1) {
                  elem.classList.add("add_fixed");
                } else {
                  elem.classList.remove("add_fixed");
                }

                if (index > 0) {
                  const prevElem: any = sections[index - 1];
                  if (self.progress > 0.2 && self.progress < 1) {
                    gsap.to(prevElem, {
                      duration: 0.5,
                      filter: "blur(5px)"
                    });
                  } else {
                    gsap.to(prevElem, {
                      duration: 0.5,
                      filter: "blur(0px)"
                    });
                  }
                }
              }
            }
          });
        }, index * 100);
      });
    });
  }, []);

  const [height, setHeight] = useState<any>([]);

  useEffect(() => {
    const updateSectionHeights = () => {
      const sections = document.querySelectorAll(".cmn_sec1");
      const heightsArray: any = [];

      sections.forEach((section) => {
        const boundingRect = section.getBoundingClientRect().height;
        heightsArray.push(boundingRect);
      });

      if (heightsArray.length) {
        setHeight(heightsArray);
      }
    };

    updateSectionHeights();

    window.addEventListener("resize", updateSectionHeights);

    return () => {
      window.removeEventListener("resize", updateSectionHeights);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <Wrapper>
      <GsapAnimationStyled minHeight={`${height[0]}px`} id="home">
        <Box className="cmn_sec cmn_sec1">
          <HeroSection />
        </Box>
      </GsapAnimationStyled>
      <GsapAnimationStyled minHeight={`${height[1]}px`} id="about">
        <Box className="cmn_sec cmn_sec1">
          <AboutSection />
        </Box>
      </GsapAnimationStyled>
      <GsapAnimationStyled minHeight={`${height[2]}px`} id="resume">
        <Box className="cmn_sec cmn_sec1">
          <WorkExperience />
        </Box>
      </GsapAnimationStyled>
      <GsapAnimationStyled minHeight={`${height[3]}px`} id="project">
        <Box className="cmn_sec cmn_sec1">
          <MyProjects />
        </Box>
      </GsapAnimationStyled>
      <Box className="cmn_sec cmn_sec1" id="contact">
        <Contact />
      </Box>
    </Wrapper>
  );
}
