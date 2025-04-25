import { Box, styled } from "@mui/material";

export const PageWrap = styled(Box)`
  position: relative;
  height: 100svh;
  padding: 80px 0;
  background-color: #000;
  overflow: hidden;

  .box {
    position: absolute;
    left: 560px;
    right: 0;
    top: 15px;
    bottom: 15px;
    transform-origin: center left;
    opacity: 0;
    visibility: hidden;
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
    width: 1px;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 15vh;
      width: 1px;
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
`;
