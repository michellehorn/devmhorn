import React, { Component } from "react";
import {
  Section,
  Badge,
  Container,
  Box,
  Title,
  Form,
  Input,
  Text,
  Link,
  TextArea,
  SubmitButton
} from "../style";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Section className="yellow-bg">
          <Badge>Contact</Badge>
          <Container className="d-flex" top={70}>
            <Box className="dark-bg">
              <Title size={100}>get in</Title>
              <Title size={90} className="pl-2">
                touch
              </Title>
              <Container id="contact-social-box">
                <Container className="d-flex centered">
                  <Link href="https://github.com/michellehorn" target="_blank">
                    <FaGithub size={30} color="white" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/michelle-horn"
                    target="_blank"
                  >
                    <FaLinkedinIn size={30} color="#0091D1" />
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send?phone=5548996614422&text=Hey!%20Esse%20contato%20est%C3%A1%20sendo%20feito%20atrav%C3%A9s%20do%20site.%20%3AD"
                    target="_blank"
                  >
                    <FaWhatsapp size={30} color="#307534" />
                  </Link>
                </Container>
                <Text size={17}>dev.michellehorn@gmail.com</Text>
              </Container>
            </Box>
            <Box className="yellow-dark-bg">
              <Form>
                <Input placeholder="Name" />
                <Input placeholder="E-mail" />
                <Input placeholder="Phone number (optional)" />
                <TextArea placeholder="Message" />
                <SubmitButton>Enviar</SubmitButton>
              </Form>
            </Box>
          </Container>
        </Section>
      </>
    );
  }
}
