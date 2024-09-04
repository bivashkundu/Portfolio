/* eslint-disable react/no-array-index-key */

import { experienceData } from "@/json/mock/common.mock";
import { WorkExperienceWrap } from "@/styles/StyledComponents/HomeStyled";
import { Container, List, ListItem } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import PageHeading from "../PageHeading/PageHeading";

const WorkExperience: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <WorkExperienceWrap className="cmn-sec-class">
      <Container fixed maxWidth="xl">
        <PageHeading
          shortTitle="My Resume"
          heading="Real"
          primaryText="Problem Solution"
          endText="Experience"
          titile="Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
        <List
          className="work-list"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
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
