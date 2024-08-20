import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const HeroSectionWrap = styled(Box)`
  background: #131313;
  position: relative;
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 150px 0;

  .static-hero-inner {
    h1 {
      font-weight: 800;
      margin-bottom: 15px;
      font-size: 72px;

      span {
        display: block;
        color: ${primaryColors.secondary};
        font-size: 55px;
        font-weight: 600;
      }
    }

    h3 {
      color: ${primaryColors.primary};
      font-size: 40px;
      letter-spacing: 2px;
      margin-bottom: 15px;
    }

    .btm-stack {
      padding-top: 30px;

      .social-links {
        display: flex;
        align-items: center;
        gap: 0 15px;
        padding-left: 30px;

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

  .shape-1 {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .shape-2 {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }

  .floating-item {
    width: 110px;
    height: 110px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background-color: ${primaryColors.white};
    position: absolute;
  }

  .main-round-img {
    border-radius: 50%;
    max-width: 500px;
  }

  .static-hero-right {
    text-align: right;
    position: relative;
  }

  .icon-1 {
    left: 42%;
    top: 22%;
  }

  .icon-2 {
    right: -5%;
    top: 22%;
  }

  .icon-3 {
    right: 3%;
    bottom: 0;
  }

  .icon-4 {
    display: flex;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: ${primaryColors.white};
    position: absolute;
    bottom: 0;
    left: 42%;
    padding: 8px 30px 8px 20px;
    text-align: left;

    svg {
      color: ${primaryColors.primary};
      margin-right: 10px;
    }

    p {
      font-size: 18px;
      font-weight: 600;
      color: ${primaryColors.textPrimaryColor};
      line-height: 1.2;
    }

    span {
      color: ${primaryColors.mainFontColor};
    }
  }
`;
