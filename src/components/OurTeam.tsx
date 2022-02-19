import styled from "styled-components";
import Button from "../shered/Components/Button";
import Description from "../shered/Components/Description";
import Title from "../shered/Components/Title";
import Img from "../images/nas-tim.png";
import { color } from "../shered/styles";

const StyledOurTeam = styled.section`
  padding: 8rem;
  display: flex;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    padding: 3rem;
  }
`;

const Box1 = styled.div`
  width: 50%;
  padding: 10rem 5rem;
  background-color: ${color.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;
const Box2 = styled.img`
  width: 50%;
  object-fit: cover;
  object-position: 90%;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const OurTeam = () => {
  return (
    <StyledOurTeam>
      <Box1>
        <Title
          color1={color.primary}
          color2={color.tertiary}
          margin="0 0 4rem 0"
        >
          Our Team
        </Title>
        <Description after color={color.primary} margin="0" fontSize="1.8rem">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium totam rem aperiam eaque ipsa quae.
        </Description>
        <Button
          color={color.secondary}
          bgColor={color.primary}
          margin="4rem auto"
          fontSize="1.8rem"
          after={false}
        >
          Read more
        </Button>
      </Box1>
      <Box2 src={Img}></Box2>
    </StyledOurTeam>
  );
};

export default OurTeam;
