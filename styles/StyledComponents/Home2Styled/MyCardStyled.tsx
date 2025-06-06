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
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
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

    img,
    video {
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
    margin-top: 1.25vw;

    h1 {
      font-size: 1.354vw;
      font-weight: 500;
      color: ${({ theme }) => theme.palette.common.white};
      letter-spacing: 0.104vw;
      font-style: italic;
      margin-bottom: 0.781vw;
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
      margin-top: 1.25vw;

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

  .car-btm-sec {
    position: relative;
    margin-top: 1.042vw;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 0.052vw;
      background: radial-gradient(
        ellipse at left,
        rgba(197, 202, 213, 0.15) 0%,
        rgba(255, 255, 255, 0) 70%
      );
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 0.417vw;
      text-transform: uppercase;
      font-size: 0.729vw;
      color: ${({ theme }) => theme.palette.common.white};
      font-weight: 700;
      text-decoration: none;
      width: 50%;
      padding: 1.042vw 0.521vw;
      position: relative;

      &:hover {
        color: #52e035;
      }

      i {
        line-height: 0;

        svg {
          font-size: 0.833vw;
        }
      }

      &:first-child {
        &::before {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 0.052vw;
          height: 100%;
          background: radial-gradient(
            ellipse at top,
            rgba(197, 202, 213, 0.15) 0%,
            rgba(255, 255, 255, 0) 70%
          );
        }
      }
    }
  }
`;
