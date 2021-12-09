import styled from "styled-components";
import { isMobile } from 'react-device-detect';

export const Section = styled.div`
  width: 100%;
  height: ${isMobile ? (props => props.height ? props.height : '170vh'): '105vh'};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: ${props => props.zindex};
`;
export const Container = styled.div`
  width: ${props => props.maxwidth}px;
  margin-top: ${props => props.top}px;
  > svg {
    padding: 10px;
  }
  text-align: center;
  padding: ${props => props.padding};
`;
export const Title = styled.h1`
  font-weight: 800;
  color: white;
  font-size: ${props => props.size}px;
  margin-bottom: 0;
  margin-top: 0;
`;

export const Subtitle = styled.h2`
  color: white;
  font-weight: 200;
  font-size: 35px;
  margin-top: 0;
  b {
    font-weight: 800;
  }
`;
export const Badge = styled.div`
  width: 100px;
  background: #000014;
  color: white;
  text-align: right;
  padding: 8px 20px;
  position: absolute;
  top: 70px;
  left: 0;
  font-weight: 800;
`;

export const Content = styled.p`
  color: #000014;
  font-size: 20px;
`;

export const Image = styled.img`
  width: 300px;
`;

export const Icon = styled.img`
  width: ${props => props.size}px;
  margin: 10px 15px;
  `

export const BoxArea = styled.div`
  box-shadow: 5px 5px 10px grey;
  margin: ${props => props.margin};
  margin-top: 3em;
  height: 500px;
  min-width: 400px;
  padding: 10px;
  padding-top: 1em;
`;

export const Text = styled.span`
  color: ${props => (props.color ? props.color : "white")};
  font-size: ${props => props.size}px;
  display: block;
  font-weight: ${props => props.fontWeight};
  background-color: ${props => props.bgColor};
  margin: ${props => props.margin};
`;

export const Box = styled.div`
  height: 500px;
  margin-top: 1em;
  width: 95%;
  max-width: 700px;
  padding: 2em 10px;
`;

export const Form = styled.form`
  border: none;
  padding: 3em;
  align-items: right;
`;

export const Input = styled.input`
  height: 48px;
  border: 2px solid white;
  font-size: 17px;
  color: white;
  width: 100%;
  padding: 0px 6px;
  margin-bottom: 25px;
  background: transparent;
  &::placeholder {
    color: white;
    font-size: 17px;
  }
  font-family:'Raleway', sans-serif;
`;

export const Link = styled.a`
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`;

export const TextArea = styled.textarea`
  height: 170px;
  width: 100%;
  padding: 0px 6px;
  padding-top: 8px;
  font-size: 17px;
  background: transparent;
  border: 2px solid white;
  color: white;
  &::placeholder {
    color: white;
    font-size: 17px;
  }
  font-family:'Raleway', sans-serif;
`;

export const SubmitButton = styled.button`
  margin-top: 0.75em;
  width: 180px;
  height: 48px;
  background: white;
  color: #c2946d;
  font-size: 17px;
  float: right;
  text-align: center;
  margin-right: -17px;
  border: none;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px white;
    border: 2px solid white;
  }
`;

export const ButtonProj = styled.button`
  background: transparent;
  border: 2px solid ${props => props.color};
  color: ${props => props.color};
  height: 39px;
  border-radius: 8px;
  font-size: 17px;
  width: 230px;
  margin-top: 20px;
  &:hover {
    background: ${props => props.color};
    color: ${props => props.bgColor};
    border: 2px solid ${props => props.color};
    cursor: pointer;
  }
`
export const Footer = styled.div`
  background: #F8EFE7;
  color: #333;
  width: 100%;
  text-align: center;
  height: 30px;
  margin: auto;
  font-size: 17px;
  span {
    color: red;
  }
`