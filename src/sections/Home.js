import React, { Component } from "react";
import Background from "../components/Background/Background";
import { Title, Subtitle, Container } from "../style";

export default class Home extends Component {
  render() {
    return (
      <>
        <Background>
          <Container>
            <Title size={80}>Hi, I'm Michelle,</Title>
            <Subtitle>
              a <b>front-end developer </b>based in Florianópolis/BR
            </Subtitle>
          </Container>
        </Background>
      </>
    );
  }
}
