import { primaryColors } from "@/themes/_muiPalette";
import { Paper, styled } from "@mui/material";

export const ProjectCardWrap = styled(Paper)`
  border-radius: 10px;
  overflow: hidden;
  background-color: ${primaryColors.color232221};
  padding: 15px;

  &:hover {
    figure {
      img {
        object-position: bottom;
      }
    }
  }

  figure {
    border-radius: 5px;
    cursor: n-resize;

    img {
      width: 100%;
      object-fit: cover;
      object-position: top;
      height: 270px;
      transition: 10s all ease;
    }
  }

  .work-description {
    padding: 15px 0;

    h4 {
      font-size: 16px;
      color: ${primaryColors.white};
      margin-bottom: 5px;
    }

    p {
      color: ${primaryColors.primary};
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
