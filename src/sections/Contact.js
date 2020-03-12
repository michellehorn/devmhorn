import React, { Component } from "react";
import { Badge, Container, Box, Title, Form, Input } from "../style";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Container className="yellow-bg">
          <Badge>Contact</Badge>
          <Container className="d-flex">
            <Box className="dark-bg">
              <Title>get in</Title>
              <Title className="pl-2">touch</Title>
            </Box>
            <Box className="yellow-dark-bg">
             <Form>
               <Input />
             </Form>
            </Box>
          </Container>
        </Container>
      </>
    );
  }
}
