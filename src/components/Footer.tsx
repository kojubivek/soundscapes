import { styled } from "styled-components";

const Container = styled.div`
  margin-top: 50px;
  height: 20vh;
  width: 100vw;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h3`
  color: #fff;
  text-align: center;
  cursor: default;
`;

export const Footer = () => {
  return (
    <Container>
      <Title>&copy; SoundSacpes</Title>
    </Container>
  );
};
