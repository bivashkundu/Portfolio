import { primaryColors } from "@/themes/_muiPalette";
import { Box, Drawer, styled } from "@mui/material";

export const HeaderWrap = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  transition: all ease-in-out 400ms;
  .custom-appbar {
    background: transparent;
    padding: 0;

    .header-menu {
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        width: auto;

        a {
          color: ${primaryColors.white};
          font-size: 16px;
          padding: 35px 20px;
          font-weight: 600;
          position: relative;
          text-transform: capitalize;
          position: relative;

          &.active {
            &::after {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 4px;
              background: ${primaryColors.primary};
              content: "";
              transition: all 0.3s;
              border-radius: 3px;
            }
          }
        }
      }
    }

    .lets-talk {
      color: ${primaryColors.white};
      text-transform: uppercase;
      gap: 0 20px;

      .offcanvas-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: ${primaryColors.primary};
        cursor: pointer;
        padding: 0;
        min-width: auto;

        .toggle-inner {
          display: flex;
          flex-direction: column;
          width: 23px;

          span {
            width: 20px;
            height: 2px;
            background-color: ${primaryColors.black};
            -webkit-transition: 0.3s;
            -o-transition: 0.3s;
            transition: 0.3s;

            &:nth-child(1),
            &:nth-child(3) {
              margin-left: auto;
            }

            &:nth-child(2) {
              margin: 5px 0;
            }
          }
        }

        &:hover {
          .toggle-inner {
            span {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

export const HeaderDrawer = styled(Drawer)`
  .drawer-paper-root {
    padding: 80px 50px 50px;
    width: 100%;
    max-width: 420px;
    background-color: ${primaryColors.color282828};

    .close-drawer {
      position: absolute;
      left: 0;
      top: 0;
      color: ${primaryColors.secondary};
      border-radius: 0;
      background-color: ${primaryColors.color111111};
    }

    .drawer-contant {
      h5 {
        font-size: 22px;
        margin-bottom: 30px;
      }

      .btm-media-sec {
        text-align: center;
        padding-top: 50px;

        a {
          color: ${primaryColors.textDisabled};
        }

        .social-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0 15px;
          margin-top: 20px;

          li {
            width: auto;
            display: block;

            a {
              display: inline-flex;
              justify-content: center;
              align-items: center;
              width: 40px;
              height: 40px;
              background-color: ${primaryColors.white};
              border-radius: 50%;
              transition: 0.3s all ease-in-out 0s;
              -webkit-transition: 0.3s all ease-in-out 0s;
              -moz-transition: 0.3s all ease-in-out 0s;

              svg {
                width: 20px;
                height: auto;
                color: ${primaryColors.textPrimaryColor};
              }

              &:hover {
                background-color: ${primaryColors.primary};
              }
            }
          }
        }
      }
    }
  }
`;
