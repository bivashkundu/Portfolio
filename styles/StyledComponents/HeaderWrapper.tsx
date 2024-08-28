import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

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
