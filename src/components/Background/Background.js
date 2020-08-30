import React from "react";

import { ContainerBg } from "./style";
import { Section } from "../../style";

function Background(props) {
    return (
      <>
        <Section height="110vh" className="dark-bg" zindex="-2">
        <ContainerBg />
        {props.children}
        </Section>
      </>
    );
}


export default Background;