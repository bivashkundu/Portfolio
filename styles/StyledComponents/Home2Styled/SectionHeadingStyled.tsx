import { Box, styled } from "@mui/material";

export const SectionHeadingBox = styled(Box)`
  padding: 1.302vw 1.042vw;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.052vw;
    background: radial-gradient(
      ellipse at left,
      rgba(197, 202, 213, 0.15) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }

  h2 {
    font-size: 1.042vw;
    font-weight: 600;
    position: relative;
    padding-left: 0.521vw;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 1.563vw;
      height: 1.563vw;
      background: linear-gradient(
        135deg,
        rgba(82, 224, 53, 0.4) 0%,
        rgba(82, 224, 53, 0.01) 100%
      );
      z-index: -1;
      border-radius: 1.563vw;
    }

    &::first-letter {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
