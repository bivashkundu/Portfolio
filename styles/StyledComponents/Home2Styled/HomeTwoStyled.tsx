
import { CustomSize, CustomSpacing } from "@/ui/CustomViewSize";
import { Box, styled } from "@mui/material";

export const PageWrap = styled(Box)`
  position: relative;
  height: 100svh;
  background-color: #202020;
  overflow: hidden;

  .right-box-main {
    width: calc(100% - ${CustomSize(480)});
  }

  .box {
    position: absolute;
    left: ${CustomSize(558)};
    right: 0;
    top: 0;
    bottom: 0;
    transform-origin: center left;
    opacity: 0;
    visibility: hidden;
    width: calc(100% - ${CustomSize(558)});
    height: 100%;
    border-radius: 0;
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
    width: ${CustomSize(1)};
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 15vh;
      width: ${CustomSize(1)};
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
      padding-left: ${CustomSize(15)};
      padding-right: ${CustomSize(15)};
    }

    @media (min-width: 1200px) {
      max-width: ${CustomSize(1200)};
    }
  }

  .section-wrap {
    max-height: calc(100svh - ${CustomSize(160)});
    position: relative;
    align-items: flex-start;
    gap: ${CustomSize(6)};

    .menu-leftbar {
      width: ${CustomSize(72)};
      position: relative;
      z-index: 11;

      .top-appbar {
        background: ${({ theme }) => theme.palette.background.paper};
        margin-bottom: ${CustomSize(8)};
        border-radius: ${CustomSize(4)};

        button {
          width: 100%;
          padding: ${CustomSize(12)};

          svg {
            font-size: ${CustomSize(24)};
          }
        }
      }

      ul {
        background: ${({ theme }) => theme.palette.background.paper};
        border-radius: ${CustomSize(4)};
        padding: ${CustomSize(8)} 0;

        li {
          justify-content: center;
          padding: 0;

          button {
            padding: ${CustomSpacing(9, 3)};
            min-width: 0;
            border-radius: 0;
            font-size: ${CustomSize(12)};
            flex-direction: column;

            i {
              line-height: 0;

              svg {
                font-size: ${CustomSize(16)};
              }
            }
          }
        }
      }
    }

    .right-wrapper {
      width: calc(100% - ${CustomSize(77)});
    }
  }

  .mainpaper-scroll {
    max-height: calc(100svh - ${CustomSize(283)});
  }
`;
