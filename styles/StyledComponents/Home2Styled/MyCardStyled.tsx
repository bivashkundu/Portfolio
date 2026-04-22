
import { CustomSize, CustomSpacing } from "@/ui/CustomViewSize";
import { Box, styled } from "@mui/material";

export const MyCardPaper = styled(Box)`
  width: ${CustomSize(480)};
  border-radius: ${CustomSize(5)};
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
    left: ${CustomSize(-15)};
    top: ${CustomSize(-15)};
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(82, 224, 53, 0.4) 0%,
      rgba(82, 224, 53, 0.01) 100%
    );
    border-radius: ${CustomSize(5)};
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
    margin: ${CustomSize(-70)} auto 0;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: ${CustomSize(10)};
      left: 48%;
      transform: translateX(-50%);
      width: ${CustomSize(140)};
      height: ${CustomSize(140)};
      background: linear-gradient(
        135deg,
        rgba(82, 224, 53, 0.4) 0%,
        rgba(82, 224, 53, 0.01) 100%
      );
      border-radius: ${CustomSize(10)};
    }
  }

  .MuiAvatar-root {
    border-radius: ${CustomSize(10)};
    margin: 0 auto;

    img {
      z-index: 2;
      position: relative;
      border-radius: ${CustomSize(10)};
    }
  }

  .my-info {
    margin-top: ${CustomSize(24)};

    h1 {
      font-size: ${CustomSize(26)};
      font-weight: 500;
      color: ${({ theme }) => theme.palette.customColors?.headingColor};
      letter-spacing: ${CustomSize(2)};
      font-style: italic;
      margin-bottom: ${CustomSize(15)};
    }

    .Typewriter {
      font-size: ${CustomSize(16)};
      line-height: normal;
    }

    .social-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 ${CustomSize(15)};
      margin-top: ${CustomSize(24)};

      li {
        width: auto;
        display: block;

        a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: ${CustomSize(40)};
          height: ${CustomSize(40)};
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
            width: ${CustomSize(20)};
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
    margin-top: ${CustomSize(20)};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: ${CustomSize(1)};
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
      gap: 0 ${CustomSize(8)};
      text-transform: uppercase;
      font-size: ${CustomSize(14)};
      color: ${({ theme }) => theme.palette.common.white};
      font-weight: 700;
      text-decoration: none;
      width: 50%;
      padding: ${CustomSpacing(20, 10)};
      position: relative;
      line-height: 1.5;

      &:hover {
        color: #52e035;
      }

      i {
        line-height: 0;

        svg {
          font-size: ${CustomSize(16)};
          width: ${CustomSize(16)};
          height: ${CustomSize(16)};
        }
      }

      &:first-child {
        &::before {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: ${CustomSize(1)};
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
