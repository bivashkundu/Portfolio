import { Paper, styled } from "@mui/material";

export const MyCardPaper = styled(Paper)`
  width: 25vw;

  figure {
    line-height: 0;
    height: 16vw;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 80% 100%, 20% 100%, 0% 80%);
  }

  .MuiAvatar-root {
    border-radius: 0.26vw;
    margin: -3.646vw auto 0;

    img {
      z-index: 2;
      position: relative;
      border: 3px solid ${({ theme }) => theme.palette.background.paper};
      border-radius: 0.26vw;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        rgba(82, 224, 53, 0.4) 0%,
        rgba(82, 224, 53, 0.01) 100%
      );
    }
  }
`;
