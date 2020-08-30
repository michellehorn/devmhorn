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
  SubmitButton,
} from "../style";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import firebase from "firebase";
import { isMobile } from 'react-device-detect';

export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    dateTime: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ name: evt.target.name.value });
    this.setState({ email: evt.target.email.value });
    this.setState({ phone: evt.target.phone.value });
    this.setState({ message: evt.target.message.value });
    this.setState({
      dateTime:
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
    });

    setTimeout(() => {
      let ref = firebase.database().ref("messages");
      ref.push(this.state, () => {
        console.log(this.state);
        alert("Mensagem enviada!");
      });
    }, 2000);
  };
  render() {
    return (
      <>
        <Section className="yellow-bg" height="220vh">
          <Badge>Contact</Badge>
          <Container className={`${isMobile ? "" : 'd-flex'}`} top={70} padding="0">
            <Box className="dark-bg" height={`${isMobile ? "400vh" : ""}`}>
              <div className="pt-2">
                <Title size={100}>get in</Title>
                <Title size={90} className="pl-2">
                  touch
                </Title>
              </div>
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
              <Form onSubmit={this.handleSubmit}>
                <Input placeholder="Name" name="name" />
                <Input placeholder="E-mail" name="email" />
                <Input placeholder="Phone number (optional)" name="phone" />
                <TextArea placeholder="Message" name="message" />
                <SubmitButton type="submit">Enviar</SubmitButton>
              </Form>
            </Box>
          </Container>
        </Section>
      </>
    );
  }
}
