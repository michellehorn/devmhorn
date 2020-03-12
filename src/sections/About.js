import React, { Component } from "react";
import { Section, Badge, Container, Content, Image } from "../style";
import profileImg from "../assets/photo.svg";

export default class About extends Component {
  render() {
    return (
      <>
        <Section className="yellow-bg">
          <Badge>About</Badge>
          <Container>
            <Image src={profileImg} alt="Profile" />
            <Container id="about-area">
              <Content>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Content>
            </Container>
          </Container>
        </Section>
      </>
    );
  }
}
