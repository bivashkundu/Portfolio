import { Box, styled } from "@mui/material";

export const PageAboutMe = styled(Box)`
  .about-me {
    padding: 1.302vw 1.042vw;

    .sm-label {
      font-size: 0.833vw;
      margin-bottom: 0.781vw;

      span {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }

    p {
      font-size: 0.729vw;
    }

    .info-sec {
      padding-top: 0.781vw;

      .get-in-stack {
        i {
          line-height: 0;
          width: 1.563vw;
          height: 1.563vw;
          display: flex;
          align-items: center;
          justify-content: center;

          svg {
            font-size: 1.25vw;
            color: ${({ theme }) => theme.palette.primary.main};
          }
        }

        .my-media-right {
          width: calc(100% - 1.563vw);
          padding-left: 0.521vw;

          .MuiFormLabel-root {
            font-size: 0.729vw;
            color: ${({ theme }) => theme.palette.common.white};
            font-weight: 600;
          }

          a {
            text-decoration: none;
            color: ${({ theme }) => theme.palette.customColors.white100};
            font-size: 0.729vw;

            &:hover {
              color: ${({ theme }) => theme.palette.primary.main};
            }
          }
        }
      }
    }
  }
`;
