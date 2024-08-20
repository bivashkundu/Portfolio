import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  background: ${primaryColors.white};
  box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.07);
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }
  .hdr_rgt {
    margin-left: 20px;
    display: flex;
    align-items: center;
    button {
      padding: 11px 42px;
      min-width: auto;
    }
    .MuiBadge-badge {
      right: 4px;
      top: 5px;
      min-width: 10px;
      height: 10px;
    }
    .cart_icon{
      margin-right: 18px;
    }
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 20px 0;
    transition: all 0.4s;
  }

  .headerLogo {
    width: 120px;
    display: inline-block;
    transition: all 0.4s;
  }
  .navbar {
    margin-left: auto;
    a {
      margin-right: 45px;
      display: inline-block;
      color: ${primaryColors.secondaryFont};
      font-size: 15px;
      &:hover {
        color: ${primaryColors.primary};
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: ${primaryColors.primary};
      }
    }
  }
`;
