import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const HeroSectionWrap = styled(Box)`
  background: url(${assest.heroBg}) no-repeat;

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
    text-align: center;
    position: relative;
  }

  .icon-1 {
    left: 0;
    top: 10%;
  }

  .icon-2 {
    right: 0;
    top: 10%;
  }

  .icon-3 {
    right: 0;
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
    left: 0;
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

  .about-exprience-wrap {
    background: linear-gradient(180deg, #2e2c1f 0%, #1b1b19 100%);
    border-radius: 10px;
    padding: 40px;
    max-width: 245px;
    width: 100%;
    margin-left: auto;

    li {
      flex-direction: column;
      align-items: flex-start;

      &:not(:last-child) {
        border-bottom: 1px solid ${primaryColors.borderprimary};
        padding-bottom: 15px;
        margin-bottom: 15px;
      }

      p {
        font-size: 32px;
        font-weight: 700;
        color: ${primaryColors.secondary};
      }

      span {
        color: ${primaryColors.secondaryFont};
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
`;

export const AboutSectionWrap = styled(Box)`
  background: url(${assest.aboutbg}) no-repeat;

  .left-caption {
    figure {
      max-width: 440px;
      height: 530px;
      margin: 0 auto;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: right;
      }
    }

    .get-touch {
      background: linear-gradient(180deg, #2e2c1f 0%, #1b1b19 100%);
      border-radius: 10px;
      padding: 20px 40px;
      width: 100%;
      max-width: 80%;
      margin: 50px auto 0;

      i {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;
        background-color: ${primaryColors.secondary};

        svg {
          color: ${primaryColors.color282828};
          font-size: 20px;
        }
      }

      .touch-right {
        width: calc(100% - 40px);
        padding-left: 15px;

        &:hover {
          a {
            color: ${primaryColors.primary};
          }
        }

        a {
          color: ${primaryColors.white};
        }
      }
    }
  }

  .about-title {
    margin-bottom: 40px;

    h2 {
      font-weight: 600;
      margin-bottom: 15px;
      font-size: 44px;

      .text-secondary {
        display: block;
        color: ${primaryColors.secondary};
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 15px;
      }
    }

    p {
      color: ${primaryColors.secondaryFont};
      font-weight: 500;
    }
  }
`;

export const OuterCardGradiant = styled(Box, {
  shouldForwardProp: (data) => data !== "color"
})<{ color?: string }>`
  background: ${({ color }) =>
    color ||
    "linear-gradient(180deg, rgba(255, 230, 0, 0.6) 0%, rgba(31, 30, 28, 0.6) 67.59%)"};
  padding: 3px 3px 0 3px;
  border-radius: 12px;

  .prop-card {
    padding: 15px;
    background: ${primaryColors.color1F1E1D};
    text-align: center;
    border-radius: 12px;
    box-shadow: none;
    min-height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: none;

    h4 {
      font-size: 30px;
      font-weight: 800;
      margin-bottom: 15px;
    }

    p {
      font-size: 14px;
      color: ${({ color }) => color || "#FFE600"};
    }
  }
`;

export const WorkExperienceWrap = styled(Box)`
  background: url(${assest.workBg}) no-repeat;

  .work-list {
    width: 100%;
    max-width: 1290px;
    margin: 50px auto 0;

    .work-item {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
`;

export const MyProjectsWrap = styled(Box)`
  background: url(${assest.projectBg}) no-repeat;
  position: relative;
  z-index: 22 !important;

  .container {
    display: flex;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }

  /* .panel {
    width: 100vw;
    height: 100vh;
    background-color: lightcoral;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  } */
`;
