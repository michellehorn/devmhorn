import React, { useState } from "react";
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

export const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    phone: "0",
    dateTime: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
  })

  const verifyField = (fields) => {
    let isComplete = true;
    let incompleteFields = [];
    Object.keys(fields).map((item) => {
      if (fields[item] === "") {
       isComplete = false;
       incompleteFields.push(item);
      }
    })
    if (incompleteFields.length > 0) alert(`Preencha o(s) campo(s) ${incompleteFields}`)
    return isComplete;
  }

  const handleChange = (e) => {
    console.log()
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let ref = firebase.database().ref("messages");
    if (verifyField(state)) {
      console.log(verifyField(state))
      ref.push(state, () => {
        alert("Mensagem enviada!");
      });
    }
  };

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
            <Form onSubmit={handleSubmit}>
              <Input onChange={handleChange} placeholder="Name" name="name" />
              <Input onChange={handleChange} placeholder="E-mail" name="email" />
              <Input onChange={handleChange} placeholder="Phone number (optional)" name="phone" />
              <TextArea onChange={handleChange} placeholder="Message" name="message" />
              <SubmitButton type="submit">Enviar</SubmitButton>
            </Form>
          </Box>
        </Container>
      </Section>
    </>
  );
}

export default Contact;