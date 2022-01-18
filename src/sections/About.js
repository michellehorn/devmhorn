import React from "react";
import { Section, Badge, Container, Content, Image } from "../style";
import profileImg from "../assets/profile.jpeg";
import { isMobile } from 'react-device-detect';
import { aboutMe } from '../assets/copy/copy';

export const About = () => (
  <>
    <Section className="yellow-bg" height="170vh">
      <Badge>About</Badge>
      <Container top={isMobile? -10 : 100}>
        <Image src={profileImg} alt="Profile" />
        <Container id="about-area">
          <Content>
            {aboutMe}
          </Content>
        </Container>
      </Container>
    </Section>
  </>
);
export default About;