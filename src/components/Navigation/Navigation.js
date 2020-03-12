import React from "react";
import { Navbar, NavItem } from "./style";

function Navigation(props) {
  const tab = [
    { to: "home", text: "Home" },
    { to: "about", text: "About me" },
    { to: "skills", text: "Skills" },
    { to: "projects", text: "Projects" },
    { to: "contact", text: "Contact" }
  ];

  const listItems = tab.map(item => (
    <NavItem
      className={`${props.hash}` === `#${item.to}` ? "active" : ""}
      href={`#${item.to}`}
      key={item.to.toString()}
    >
      {item.text}
      <span>|</span>
    </NavItem>
  ));

  return <Navbar className={props.children}>{listItems}</Navbar>;
}

export default Navigation;
