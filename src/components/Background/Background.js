import React from "react";

import { ContainerBg } from "./style";
import { Section } from "../../style";

function Background(props) {
    return (
      <>
        <Section className="dark-bg">
        <ContainerBg />
        {props.children}
        </Section>
      </>
    );
}


export default Background;