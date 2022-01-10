import React from "react";
import { Card } from "./style";
import { Text, ButtonProj, Container } from "../../style";

function ProjectCard({ img, link, text }) {
  return (
    <Card image={img} className="test">
      <Text>{text}</Text>
      <Container>
        <ButtonProj
          color="white"
          bgColor="#C2946D"
          onClick={() => window.open(link, "_blank")}
        >
          View demo
        </ButtonProj>
      </Container>
    </Card>
  );
}

export default ProjectCard;
