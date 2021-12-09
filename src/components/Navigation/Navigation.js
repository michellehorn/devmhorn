import React from "react";
import { Navbar, NavItem } from "./style";
import { Icon } from "../../style.js";
import casa from '../../assets/icons/casa.svg';
import contato from '../../assets/icons/contato.svg'
import util from '../../assets/icons/do-utilizador.svg'
import list from '../../assets/icons/lista-de-compras.svg'
import think from '../../assets/icons/pensamento.svg'
import { isMobile } from 'react-device-detect';

function Navigation(props) {
  const tab = [
    { to: "home", text: "Home", icon: casa },
    { to: "about", text: "About me", icon: util },
    { to: "skills", text: "Skills", icon: think  },
    { to: "projects", text: "Projects", icon: list  },
    { to: "contact", text: "Contact", icon: contato  }
  ];

  const listItems = () => {
    if(isMobile) {
      return tab.map(item => (
        <a href={`#${item.to}`}><Icon alt={item.text} src={item.icon} size={30}/></a>
      ));
    } else {
      return tab.map(item => (
        <NavItem
          className={`${props.hash}` === `#${item.to}` ? "active" : ""}
          href={`#${item.to}`}
          key={item.to.toString()}
        >
          {item.text}
          <span>|</span>
        </NavItem>
      ));
    }
  }
  
  return <Navbar className={props.children}>{listItems()}</Navbar>;
}

export default Navigation;
