
import { CustomSize, CustomSpacing } from "@/ui/CustomViewSize";
import { Box, styled } from "@mui/material";

export const PageAboutMe = styled(Box)`
  .about-me {
    padding: ${CustomSpacing(25, 20)};

    .sm-label {
      font-size: ${CustomSize(16)};
      margin-bottom: ${CustomSize(15)};

      span {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }

    p {
      font-size: ${CustomSize(14)};
    }

    .info-sec {
      padding-top: ${CustomSize(15)};

      .get-in-stack {
        i {
          line-height: 0;
          width: ${CustomSize(30)};
          height: ${CustomSize(30)};
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            font-size: ${CustomSize(24)};
            color: ${({ theme }) => theme.palette.primary.main};
            width: ${CustomSize(24)};
            height: ${CustomSize(24)};
          }
        }

        .my-media-right {
          width: calc(100% - ${CustomSize(30)});
          padding-left: ${CustomSize(10)};
          line-height: normal;

          .MuiFormLabel-root {
            font-size: ${CustomSize(14)};
            color: ${({ theme }) => theme.palette.common.white};
            font-weight: 600;
            margin-bottom: ${CustomSize(5)};
            line-height: 1.5;
          }

          a {
            text-decoration: none;
            font-size: ${CustomSize(14)};
            line-height: 1.5;
            display: inline-block;

            &:hover {
              color: ${({ theme }) => theme.palette.primary.main};
            }
          }
        }
      }
    }
  }

  .pricing-sec {
    
    gap: ${CustomSize(16)};

    .basic-pricebox {
      width: calc(50% - (1 * ${CustomSize(16)} / 2));
      position: relative;
      padding: ${CustomSpacing(25, 20)};

      &:not(:last-child) {
        &::after {
          content: "";
          position: absolute;
          right: ${CustomSize(-8)};
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

      .i-span {
        line-height: 0;
        color: ${({ theme }) => theme.palette.primary.main};

        svg {
          width: ${CustomSize(24)};
          height: ${CustomSize(24)};
        }
      }

      .pricing-header {
        margin: ${CustomSize(15)} 0;

        .header-left {
          
          .sm-label {
            font-size: ${CustomSize(16)};

            span {
              color: ${({ theme }) => theme.palette.primary.main};
            }
          }

          .MuiTypography-caption {
            font-size: ${CustomSize(14)};
          }
        }

        .header-right {
          .MuiTypography-body1 {
            font-size: ${CustomSize(24)};
            color: ${({ theme }) => theme.palette.primary.main};
            font-weight: 600;
          }
        }
      }

      .plan-subtitle {
        font-size: ${CustomSize(14)};
      }

      .order-btn {
        margin-top: ${CustomSize(15)};
        color: ${({ theme }) => theme.palette.common.white};
        text-transform: capitalize;
        line-height: 1.5;
        font-size: ${CustomSize(14)};
        padding: 0;

        .MuiButton-endIcon {
          margin-left: ${CustomSize(5)};
          margin-right: 0;

          svg {
            width: ${CustomSize(18)};
            height: ${CustomSize(18)};
          }
        }

        &:hover {
          color: ${({ theme }) => theme.palette.primary.main};
          background-color: transparent;
        }
      }
    }
  }
`;

export const ResumeWrapper = styled(Box)`
  .total-exp {
    gap: ${CustomSize(16)};

    .exp-box {
      width: calc(33.333% - (2 * ${CustomSize(16)} / 3));
      padding: ${CustomSpacing(25, 20)};
      position: relative;
      text-align: center;

      &:not(:last-child) {
        &::after {
          content: "";
          position: absolute;
          right: ${CustomSize(-8)};
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

      span {
        line-height: 0;
        margin-bottom: ${CustomSize(15)};
        display: inline-block;
      }

      .exp-content {
        h3 {
          font-size: ${CustomSize(24)};
          color: ${({ theme }) => theme.palette.common.white};
        }
      }

      p {
        font-size: ${CustomSize(14)};
      }
    }
  }
`
