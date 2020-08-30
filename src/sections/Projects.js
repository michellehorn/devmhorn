import React, { Component } from "react";
import { Badge, Container, Section, ButtonProj } from "../style";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import a1 from "../assets/images/A1.png";
import a2 from "../assets/images/A2.png";
import a3 from "../assets/images/A3.png";
import a4 from "../assets/images/A4.png";
import a5 from "../assets/images/A5.png";
import a6 from "../assets/images/A6.png";
import { isMobile } from 'react-device-detect';

export default class Projects extends Component {
  save() {
    alert("hi");
  }

  render() {
    const projectsList = [
      {
        title: "Studio Fran",
        text: "Webpage for beauty salon. Using vuejs, hosting in firebase.",
        linkButton: "https://studio-fran-rinaldi.firebaseapp.com/#/",
        image: a1
      },
      {
        text: "mirror twitter - taken from rocketseat",
        linkButton: "https://michellehorn.github.io/twitter-mirror/",
        image: a2
      },
      {
        title: "Toque seu negócio",
        text:
          "Project made for Gama xp, in order to get leads, using Angular and Firebase",
        linkButton: "https://toqueseunegocio-ba162.firebaseapp.com",
        image: a3
      },
      {
        title: "The valley",
        text: "website for thevalley",
        linkButton: "https://the-valley-xp.firebaseapp.com/",
        image: a4
      },
      {
        title: "Users github",
        text: "React webapp to find github user data by username",
        linkButton: "https://find-github-users.herokuapp.com/",
        image: a5
      },
      {
        title: "Abrigo Saltimbancos",
        text:
          "Project made with love for Saltimbancos' ONG, using Angular and hosting in firebase",
        linkButton: "https://abrigosaltimbancos.com.br/",
        image: a6
      },
    ];

    return (
      <>
        <Section className="yellow-bg" height={`${isMobile ? '240vh' : ''}`}>
          <Badge>Projects</Badge>
          <Container className="d-block" top={100}>
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
  }
}
