import React from "react";
import { Card } from "./style";
import { Text, ButtonProj, Container } from "../../style";

function ProjectCard(props) {
  return (
    <>
      <Card image={props.img}>
        <Text>{props.text}</Text>
        <Container>
          <ButtonProj color="white" bgColor="#C2946D" onClick={() => window.open(props.link, "_blank")}>View demo</ButtonProj>
        </Container>
      </Card>
    </>
  );
}

export default ProjectCard;
