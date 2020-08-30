import React, { Component } from "react";
import { Section, Badge, Container, Content, Image } from "../style";
import profileImg from "../assets/photo.svg";
import { isMobile } from 'react-device-detect';

export default class About extends Component {
  render() {
    return (
      <>
        <Section className="yellow-bg" height="170vh">
          <Badge>About</Badge>
          <Container top={`${isMobile ? '100' : ''}`}>
            <Image src={profileImg} alt="Profile" />
            <Container id="about-area">
              <Content>
              Hi, my name is Michelle Horn, I’m a front-end developer, with about 4 years of experience. I’m from Florianópolis/BR where I currently live.
During my journey, I’ve worked with the top 3 front-end technologies (Angular 2+, Reactjs and Vuejs), besides having solid knowledge in base technologies (html, css, javascript).

I love the education field and have big involvement with the cause. I’m currently working with the company Trybe, that is education for developers, and I’m also involvment with Gama Experience, a project from Gama Academy (where I help as a mentor for new developers during the course).

Personally, I define myself as a “Nuttela nerd”, cause even tho in love with technology, Star Wars, super heroes and gams, I also love going to the bar to drink some beer with friends. You can check more about me in the next sections of this website.
              </Content>
            </Container>
          </Container>
        </Section>
      </>
    );
  }
}
