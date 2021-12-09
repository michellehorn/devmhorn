import React from "react";
import { Badge, Container, Section, ButtonProj } from "../style";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { isMobile } from 'react-device-detect';
import { projectsList } from "../assets/copy/copy";

export const Projects = () => (
  <>
    <Section className="yellow-bg" height={`${isMobile ? '240vh' : ''}`}>
      <Badge>Projects</Badge>
      <Container className="d-block" top={isMobile? -100 : 100}>
        <Container className="d-flex centered wrap container" padding="0">
          {projectsList.map((item, ind) => (
            <ProjectCard
              key={ind}
              text={item.text}
              link={item.linkButton}
              img={item.image}
            />
          ))}
        </Container>
        <ButtonProj
          color="#C2946D"
          bgColor="white"
          onClick={() =>
            window.open(
              "https://github.com/michellehorn?tab=repositories",
              "_blank"
            )
          }
        >
          See more on Github
        </ButtonProj>
      </Container>
    </Section>
  </>
);

export default Projects;