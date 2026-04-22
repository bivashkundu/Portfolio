
import { CustomSize, CustomSpacing } from "@/ui/CustomViewSize";
import { Box, styled } from "@mui/material";

export const SectionHeadingBox = styled(Box)`
  padding: ${CustomSpacing(25, 20)};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${CustomSize(1)};
    background: radial-gradient(
      ellipse at left,
      rgba(197, 202, 213, 0.15) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }

  h2 {
    font-size: ${CustomSize(20)};
    font-weight: 600;
    position: relative;
    padding-left: ${CustomSize(10)};
    color: ${({ theme }) => theme.palette.customColors?.headingColor};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: ${CustomSize(30)};
      height: ${CustomSize(30)};
      background: linear-gradient(
        135deg,
        rgba(82, 224, 53, 0.4) 0%,
        rgba(82, 224, 53, 0.01) 100%
      );
      z-index: -1;
      border-radius: ${CustomSize(30)};
    }

    &::first-letter {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;
