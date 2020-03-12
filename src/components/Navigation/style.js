import styled from "styled-components";

export const Navbar = styled.nav`
  position: fixed;
  padding-top: 20px;
  display: flex;
  z-index: 10;
  justify-content: center;
  align-items: center;
  height: 68px;
  width: 100%;
  &.dark {
    background-color: #000014;
  }
`;

export const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 20px;
  span {
    padding: 15px;
  }
  &:last-child {
    span {
      display: none;
    }
  }
`;
