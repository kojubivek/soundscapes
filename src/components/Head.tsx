import { styled } from "styled-components";

const TitleContainer = styled.div``;

const Title = styled.h2`
  text-align: center;
  font-size: 15vw;
  cursor: default;
`;

export const Head = () => {
  return (
    <TitleContainer>
      <Title>SoundScapes</Title>
    </TitleContainer>
  );
};
