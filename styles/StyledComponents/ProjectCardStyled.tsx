import { Paper, styled } from "@mui/material";

export const ProjectCardWrap = styled(Paper)`
  figure {
    border-radius: 5px;
    cursor: n-resize;

    img {
      width: 100%;
      object-fit: cover;
      object-position: top;
      height: 270px;
      transition: 15s all ease;

      &:hover {
        object-position: bottom;
      }
    }
  }
`;
