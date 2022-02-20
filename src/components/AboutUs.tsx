import styled from "styled-components";
import Button from "../shered/Components/Button";
import Description from "../shered/Components/Description";
import Title from "../shered/Components/Title";
import { color } from "../shered/styles";

const StyledAboutUs = styled.section`
  padding: 8rem;
  display: flex;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding: 3rem;
  }
`;

const Box1 = styled.div`
  width: 40%;
  padding: 5rem;
  background-color: ${color.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 7rem 5rem;
  }
`;
const Box2 = styled(Box1)`
  width: 55%;
  padding: 2rem 7rem;
  background-color: white;
  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 2rem;
  }
  @media only screen and (max-width: 600px) {
    button {
      margin: auto;
    }
  }
`;

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <Box1>
        <Title
          color1={color.primary}
          color2={color.tertiary}
          margin="0 0 4rem 0"
        >
          About Us
        </Title>
        <Description after color={color.primary} margin="0" fontSize="1.8rem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Description>
      </Box1>
      <Box2>
        <Description
          after
          color={color.secondary}
          margin="0 0 2rem 0"
          fontSize="1.8rem"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Description>
        <Description
          after={false}
          color={color.secondary}
          margin="0"
          fontSize="1.4rem"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium totam rem aperiam eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </Description>
        <Button
          color={color.tertiary}
          bgColor={color.primary}
          margin="0"
          fontSize="1.6rem"
          after
        >
          Read more
        </Button>
      </Box2>
    </StyledAboutUs>
  );
};

export default AboutUs;
