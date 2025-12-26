import { Box, Container, Stack, styled } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

const TestStack = styled(Stack)`
  .col-md {
    width: 33%;
  }

  .col1 {
    height: 700px;
  }
  .col2 {
    height: 1100px;
  }
  .col1 {
    height: 1800px;
  }

  .box1 {
    height: 350px;
    position: relative;
  }

  .box2 {
    height: 850px;
    position: relative;
  }

  .box3 {
    height: 1200px;
    position: relative;
  }

  .timeline-line,
  .timeline-fill {
    position: absolute;
    top: 0;
    left: 50%;
    width: 6px;
    transform: translateX(-50%);
    background: #ccc;
    border-radius: 3px;
  }

  .timeline-line {
    height: 100%;
    z-index: 1;
  }

  .timeline-fill {
    height: 0%;
    background: red;
    z-index: 2;
    transform-origin: top;
  }
`;

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const fillLines = document.querySelectorAll<HTMLElement>(".timeline-fill");

    fillLines.forEach((line) => {
      gsap.to(line, {
        scrollTrigger: {
          trigger: line.closest(".col-md"),
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true
        },
        height: "100%",
        ease: "none",
        transformOrigin: "top"
      });
    });
  }, []);

  return (
    <Container fixed>
      <Box sx={{ background: "#f8d0d0", height: "100vh" }}></Box>
      <TestStack direction="row" className="timeline-main-container">
        <Box className="col-md col1">
          <Box className="box1">
            <div className="timeline-fill" />
            <div className="timeline-line" />
          </Box>
        </Box>
        <Box className="col-md col2">
          <Box className="box2">
            <div className="timeline-fill" />
            <div className="timeline-line" />
          </Box>
        </Box>
        <Box className="col-md col3">
          <Box className="box3">
            <div className="timeline-fill" />
            <div className="timeline-line" />
          </Box>
        </Box>
      </TestStack>
      <Box sx={{ background: "#f8d0d0", height: "100vh" }}></Box>
    </Container>
  );
}
