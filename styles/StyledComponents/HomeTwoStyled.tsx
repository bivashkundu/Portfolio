import { Box, styled } from "@mui/material";

export const PageWrap = styled(Box)`
  position: relative;
  height: 100svh;
  background-color: #000;
  overflow: hidden;

  .right-box-main {
    width: calc(100% - 25vw);
  }

  .box {
    position: absolute;
    left: 29.063vw;
    right: 0;
    top: 0;
    bottom: 0;
    transform-origin: center left;
    opacity: 0;
    visibility: hidden;
    width: calc(100% - 29.063vw);
    height: 100%;
  }

  .active {
    opacity: 1;
    visibility: visible;
    animation: customrollIn 0.6s forwards;
    z-index: 2;
  }

  .exiting {
    opacity: 1;
    visibility: visible;
    animation: customrollOut 0.6s forwards;
    z-index: 1;
  }

  @keyframes customrollIn {
    from {
      opacity: 0;
      transform: translate3d(-70%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes customrollOut {
    from {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(70%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  }

  .lines {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .line {
    width: 0.052vw;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 15vh;
      width: 0.052vw;
      top: -50%;
      left: 0;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 75%,
        #ffffff 100%
      );
      animation: drop 7s infinite;
      animation-fill-mode: forwards;
      animation-delay: var(--delay);
      animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    }
  }

  @keyframes drop {
    0% {
      top: -50%;
    }
    100% {
      top: 110%;
    }
  }

  .MuiContainer-root {
    @media (min-width: 600px) {
      padding-left: 0.781vw;
      padding-right: 0.781vw;
    }

    @media (min-width: 1200px) {
      max-width: 62.5vw;
    }
  }

  .section-wrap {
    max-height: calc(100svh - 8.333vw);
    position: relative;
    align-items: flex-start;
    gap: 0.313vw;

    .menu-leftbar {
      width: 3.75vw;
      position: relative;
      z-index: 11;

      .top-appbar {
        background: ${({ theme }) => theme.palette.background.paper};
        margin-bottom: 0.417vw;
        border-radius: 0.208vw;

        button {
          width: 100%;
          padding: 0.625vw;

          svg {
            font-size: 1.25vw;
          }
        }
      }

      ul {
        background: ${({ theme }) => theme.palette.background.paper};
        border-radius: 0.208vw;
        padding: 0.417vw 0;

        li {
          justify-content: center;
          padding: 0;

          button {
            padding: 0.469vw 0.156vw;
            min-width: 0;
            border-radius: 0;
            font-size: 0.625vw;
            flex-direction: column;

            i {
              line-height: 0;

              svg {
                font-size: 0.833vw;
              }
            }
          }
        }
      }
    }

    .right-wrapper {
      width: calc(100% - 4.036vw);
    }
  }
`;
