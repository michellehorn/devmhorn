import styled from "styled-components";

export const Card = styled.div`
  height: 150px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: url(${props => props.image});
  background-size: cover;
  position: relative;
  margin: 1em;
  border-radius: 8px;
  padding: 1em;
  transition: all 1s ease;
  bottom: 0;
  text-align: center;
  h1,
  span,
  button {
    display: none;
  }

  &:hover {
    background: #c2946d;
    bottom: 1em;
    transition: bottom 1s ease;
    h1,
    span,
    button {
      display: block;
    }
  }
`;
