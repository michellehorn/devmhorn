import styled from "styled-components";

export const Section = styled.div`
  width: 100vw;
  height: 105vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -2;
`;
export const Container = styled.div`
  padding: 15px;
  text-align: center;
`;
export const Title = styled.h1`
  font-weight: 800;
  color: white;
  font-size: 80px;
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
  width: 350px;
`;

export const BoxArea = styled.div`
  box-shadow: 5px 5px 10px grey;
  margin: 20px;
  margin-top: 3em;
  height: 500px;
  min-width: 400px;
  padding: 10px;
  padding-top: 1em;
`;

export const Text = styled.span`
  color: white;
`;

export const Box = styled.div`
  height: 500px;
  width: 100%;
  padding: 1em 10px;
`;

export const Form = styled.form`
  border: none;
`;

export const Input = styled.input`
  height: 48px;
  border: 2px solid white;
  background: transparent;
`;

