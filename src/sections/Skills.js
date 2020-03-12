import React, { Component } from "react";
import { Section, Badge, Container, BoxArea, Text } from "../style";

export default class Skills extends Component {
  render() {
    return (
      <>
        <Section className="yellow-bg">
          <Badge>Skills</Badge>
          <Container className="d-flex centered">
            <BoxArea className="dark-bg text-light">
              <Text className="regular-text-title">
                <b>Hard skills</b>
              </Text>
            </BoxArea>
            <BoxArea className="yellow-dark-bg text-light">
              <Text className="regular-text-title">
                <b>Soft skills</b>
              </Text>
            </BoxArea>
          </Container>
        </Section>
      </>
    );
  }
}
