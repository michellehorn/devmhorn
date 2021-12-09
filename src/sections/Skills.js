import React, { Component } from "react";
import { Section, Badge, Container, BoxArea, Text } from "../style";
import {
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithubSquare,
  FaReact,
  FaAngular,
  FaSass,
  FaLess
} from "react-icons/fa";
import { isMobile } from 'react-device-detect';
import { softSkills } from '../assets/copy/copy'

export default class Skills extends Component {
  render() {

    return (
      <>
        <Section className="yellow-bg" height="220vh">
          <Badge>Skills</Badge>
          <Container className={`${isMobile ? "d-block" : "d-flex centered"}`} padding="0">
            <BoxArea className="dark-bg text-light" margin={`${isMobile ? '0' : '10px'}`}>
              <Text size={25} className="regular-text-title">
                <b>Hard skills</b>
              </Text>
              <Container maxwidth={300} top={60} className="d-flex centered" >
                <Container maxwidth={300}>
                  <FaVuejs size={80} color="#3eaf7c" />
                  <FaHtml5 size={80} color="orange" />
                  <FaCss3Alt size={80} color="#0091D1" />
                </Container>
                <Container>
                  <FaJs size={80} color="yellow" />
                  <FaGithubSquare size={80} color="#d3d3d3" />
                  <FaReact size={80} color="#0091D1" />
                </Container>
                <Container>
                  <FaAngular size={80} color="#0091D1" />
                  <FaSass size={80} color="pink" />
                  <FaLess size={80} color="white" />
                </Container>
              </Container>
            </BoxArea>
            <Container maxwidth={300}>
              <BoxArea className="yellow-dark-bg text-light" margin={`${isMobile ? '0' : '10px'}`}>
                <Text size={25} className="regular-text-title">
                  <b>Soft skills</b>
                </Text>

                <Container top={30} className="d-flex centered" padding="0">
                  <Container maxwidth={350} className="text-center">
                    {softSkills.map(item => (
                      <Text
                        size={20}
                        fontWeight={800}
                        key={item}
                        margin="5px 0px"
                      >
                        <i>{item}</i>
                      </Text>
                    ))}
                  </Container>
                </Container>

              </BoxArea>
            </Container>

          </Container>
        </Section>
      </>
    );
  }
}
