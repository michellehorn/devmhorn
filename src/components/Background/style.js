import styled from "styled-components";
import img from "../../assets/bg4.jpg";

export const ContainerBg = styled.div`
  background-image: url(${img});
  background-size: cover;
   margin: -5px -10px -10px -5px;
  filter: blur(10px);
  width: 100vw;
  height: 105vh;
  display: flex;
  opacity: 0.36;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: -2;
`;
