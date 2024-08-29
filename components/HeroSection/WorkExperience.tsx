/* eslint-disable react/no-array-index-key */
import { experienceData } from "@/json/mock/common.mock";
import { WorkExperienceWrap } from "@/styles/StyledComponents/HomeStyled";
import { Container, List, ListItem } from "@mui/material";
import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import PageHeading from "../PageHeading/PageHeading";

const WorkExperience: React.FC = () => {
  return (
    <WorkExperienceWrap className="cmn-sec-class">
      <Container fixed maxWidth="xl">
        <PageHeading
          heading="Real"
          primaryText="Problem Solution"
          endText="Experience"
          titile="Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system"
        />
        <List className="work-list">
          {experienceData.map((item, idx) => (
            <ListItem key={idx} className="work-item">
              <ExperienceCard {...item} />
            </ListItem>
          ))}
        </List>
      </Container>
    </WorkExperienceWrap>
  );
};

export default WorkExperience;
