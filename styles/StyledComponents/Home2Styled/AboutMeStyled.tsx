
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
          /* line-height: normal; */

          .MuiFormLabel-root {
            font-size: ${CustomSize(14)};
            color: ${({ theme }) => theme.palette.common.white};
            font-weight: 600;
            /* margin-bottom: ${CustomSize(5)}; */
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
    padding: ${CustomSpacing(25, 20)};

    .basic-pricebox {
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
    }
  }
`;