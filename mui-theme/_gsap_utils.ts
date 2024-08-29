import { Box, styled } from "@mui/material";

export const GsapAnimationStyled = styled(Box)`
  ${({ minHeight }) => `
min-height: ${minHeight}px;
`}

  @media (max-width: 1199px) {
    height: 100%;
    min-height: auto !important;
  }
  .cmn_sec {
    min-height: 100vh;
    position: relative;
    z-index: 2;

    @media (max-width: 1199px) {
      min-height: auto;
      height: auto;
    }
  }
  .add_fixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    transform: none !important;
    -webkit-transform: translateZ(0) !important;
  }
`;
