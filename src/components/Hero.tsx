import { styled } from "styled-components";
import MainImg from "../assets/A trip to Sunshine (Original) (1).png";

const Container = styled.div`
  height: 80vh;
  width: 100vw;
`;
const ImageContainer = styled.div`
  height: 50vh;
`;
const Image = styled.img`
  height: 50vh;
  width: 100vw;
  object-fit: contain;
`;

export const Hero = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={MainImg} />
      </ImageContainer>
    </Container>
  );
};
