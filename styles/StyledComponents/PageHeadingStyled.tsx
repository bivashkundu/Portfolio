import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/material";

export const PageHeadingBox = styled(Box)`
  text-align: center;

  .top-title {
    display: block;
    color: ${primaryColors.secondary};
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  h3 {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 44px;
    max-width: 520px;
    margin: 0 auto 30px;
    line-height: 1.2;
  }

  p {
    color: ${primaryColors.white};
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
`;
