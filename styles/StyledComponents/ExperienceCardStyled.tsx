import { primaryColors } from "@/themes/_muiPalette";
import { Paper, styled } from "@mui/material";

export const ExperienceCardWrap = styled(Paper)`
  width: 100%;
  padding: 20px 70px;
  background: ${primaryColors.color282828};
  border-radius: 8px;
  position: relative;
  border: 1px solid transparent;
  transition: 0.3s all ease-in-out 0s;
  -webkit-transition: 0.3s all ease-in-out 0s;
  -moz-transition: 0.3s all ease-in-out 0s;

  &:hover {
    border-color: ${primaryColors.color494949};
  }

  .year-text {
    font-size: 30px;
    font-weight: 700;
    color: ${primaryColors.white};

    span {
      font-size: 20px;
      font-weight: 600;
    }
  }

  h4 {
    font-size: 30px;
    font-weight: 700;
    color: ${primaryColors.white};
  }
`;
