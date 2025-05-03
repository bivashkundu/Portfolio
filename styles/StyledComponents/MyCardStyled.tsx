import { Box, styled } from "@mui/material";

export const MyCardPaper = styled(Box)`
  width: 25vw;
  border-radius: 0.26vw;
  position: relative;

  .mycard-paper {
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    left: -0.781vw;
    top: -0.781vw;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(82, 224, 53, 0.4) 0%,
      rgba(82, 224, 53, 0.01) 100%
    );
    border-radius: 0.26vw;
  }

  figure {
    line-height: 0;
    height: 35.5svh;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 80% 100%, 20% 100%, 0% 80%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  .myavt {
    margin: -3.646vw auto 0;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0.521vw;
      left: 50%;
      transform: translateX(-50%);
      width: 7.292vw;
      height: 7.292vw;
      background: linear-gradient(
        135deg,
        rgba(82, 224, 53, 0.4) 0%,
        rgba(82, 224, 53, 0.01) 100%
      );
    }
  }

  .MuiAvatar-root {
    border-radius: 0.26vw;
    margin: 0 auto;

    img {
      z-index: 2;
      position: relative;
      border-radius: 0.26vw;
    }
  }
`;
