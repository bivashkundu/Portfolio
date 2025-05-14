import { Box, styled } from "@mui/material";

export const MyCardPaper = styled(Box)`
  width: 25vw;
  border-radius: 0.26vw;
  position: relative;
  z-index: 9;

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
      left: 48%;
      transform: translateX(-50%);
      width: 7.292vw;
      height: 7.292vw;
      background: linear-gradient(
        135deg,
        rgba(82, 224, 53, 0.4) 0%,
        rgba(82, 224, 53, 0.01) 100%
      );
      border-radius: 0.521vw;
    }
  }

  .MuiAvatar-root {
    border-radius: 0.521vw;
    margin: 0 auto;

    img {
      z-index: 2;
      position: relative;
      border-radius: 0.521vw;
    }
  }

  .my-info {
    margin-top: 1.563vw;

    h1 {
      font-size: 1.25vw;
      font-weight: 500;
      color: ${({ theme }) => theme.palette.common.white};
    }

    .Typewriter {
      font-size: 0.833vw;
      line-height: normal;
    }

    .social-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 0.781vw;

      li {
        width: auto;
        display: block;

        a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 2.083vw;
          height: 2.083vw;
          border-radius: 50%;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.palette.primary.main};
            -webkit-transform: scale(0);
            -ms-transform: scale(0);
            transform: scale(0);
            -webkit-transition: 0.3s;
            -o-transition: 0.3s;
            transition: 0.3s;
            border-radius: 50%;
            z-index: -1;
          }

          svg {
            width: 1.042vw;
            height: auto;
            color: ${({ theme }) => theme.palette.common.white};
            position: relative;
            z-index: 2;
          }

          &:hover {
            &::before {
              -webkit-transform: scale(1.1);
              -ms-transform: scale(1.1);
              transform: scale(1.1);
              z-index: 1;
            }
          }
        }
      }
    }
  }
`;
