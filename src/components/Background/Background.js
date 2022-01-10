import React from "react";

import { ContainerBg } from "./style";
import { Section } from "../../style";

function Background({ children }) {
    return (
      <>
        <Section height="110vh" className="dark-bg" zindex="-2">
        <ContainerBg />
        {children}
        </Section>
      </>
    );
}


export default Background;