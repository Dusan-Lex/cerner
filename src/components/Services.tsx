import styled from "styled-components";
import { color, mixin } from "../shered/styles";
import Img1 from "../images/servis-1.png";
import Img2 from "../images/servis-2.png";
import Img3 from "../images/servis-3.png";

const StyledServices = styled.section`
  padding: 8rem;
  ${mixin.center};
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const ServiceBox = styled.div`
  width: 27rem;
  height: 27rem;
  margin: 2rem;
  position: relative;
  @media only screen and (max-width: 700px) {
    width: 70vw;
    height: 70vw;
  }

  h5 {
    color: ${color.tertiary};
    font-size: 1.5rem;
    margin: 0;
    padding: 1rem 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }

  span {
    ${mixin.center}
    font-size: 1.8rem;
    font-weight: 600;
    position: absolute;
    top: 0;
    left: 0;
    width: 5.5rem;
    height: 5.5rem;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    color: ${color.primary};
    background-color: ${color.tertiary};
    box-shadow: -1px 2px 8px grey;
  }

  &::before {
    content: "";
    ${mixin.coverParent}
    overflow: hidden;
    background: linear-gradient(
      to top,
      ${color.primary} 0%,
      rgba(0, 0, 0, 0) 30%
    );
  }
`;
const ServiceImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Services = () => {
  return (
    <StyledServices>
      {[1, 2, 3].map((item) => (
        <ServiceBox key={item}>
          <ServiceImg
            src={item === 1 ? Img1 : item === 2 ? Img2 : Img3}
          ></ServiceImg>
          <h5>Service {item}</h5>
          <span>{item}</span>
        </ServiceBox>
      ))}
    </StyledServices>
  );
};

export default Services;
