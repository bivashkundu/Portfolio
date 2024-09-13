import { MyProjectProps } from "@/interface/commonAll.interfaces";
import { ProjectCardWrap } from "@/styles/StyledComponents/ProjectCardStyled";
import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProjectCard: React.FC<MyProjectProps> = ({
  image,
  title,
  name,
  ...props
}) => {
  return (
    <ProjectCardWrap {...props}>
      <figure>
        <Image src={image} width={400} height={300} alt="project-image" />
      </figure>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body2">{name}</Typography>
    </ProjectCardWrap>
  );
};

export default ProjectCard;
