import React from "react";
import Background from "../components/Background/Background";
import { Title, Subtitle, Container, Section } from "../style";
import { isMobile } from 'react-device-detect';

export const Home = () => (
  <Background>
    <Section>
      <Container>
        <Title size={isMobile ? 60 : 80}>Hi, I'm Michelle.</Title>
        <Subtitle>
          a <b>front-end developer </b>based in Florianópolis/BR
        </Subtitle>
      </Container>
    </Section>
  </Background>
);

export default Home;