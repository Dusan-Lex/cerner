import styled from "styled-components";
import Description from "../shered/Components/Description";
import Title from "../shered/Components/Title";
import Img from "../images/background-image.png";
import Img1 from "../images/desktop-icon.png";
import Img2 from "../images/tablet-icon.png";
import Img3 from "../images/smartphone-icon.png";

import { color, mixin } from "../shered/styles";

const StyledWhyUs = styled.section`
  padding: 2rem 18rem;

  @media only screen and (max-width: 1300px) {
    padding: 2rem 8rem;
  }
  @media only screen and (max-width: 900px) {
    padding: 2rem 3rem;
  }
`;

const WhyUsBox1 = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  min-height: 45rem;
  display: flex;
  flex-direction: column;
  background-color: ${mixin.darken(color.tertiary, 0.1)};
  ${mixin.center}
  p {
    text-align: center;
    z-index: 10;
    padding: 0 4rem;
  }
  &::after {
    content: "";
    position: absolute;
    width: 50%;
    right: 0;
    top: 0;
    height: 100%;
    background-color: ${color.primary};
    clip-path: polygon(36% 9%, 100% 0, 100% 100%, 0% 100%);
  }
`;

const WhyUsBox2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .item {
    width: 33%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      position: relative;
      img {
        width: 7rem;
        height: 7rem;
      }
      span {
        ${mixin.coverParent}
        ${mixin.center}
				font-size: 3rem;
        letter-spacing: 0.5rem;
        color: ${color.primary};
        @media only screen and (max-width: 400px) {
          font-size: 2rem;
        }
      }
    }
    p {
      margin: 0;
      padding-top: 2rem;
      font-size: 2rem;
      color: ${color.secondary};
    }
  }
`;

const WhyUsBox3 = styled.div`
  position: relative;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  h5 {
    color: ${color.tertiary};
    font-size: 1.8rem;
    letter-spacing: 2px;
    margin: 0;
    padding: 2rem 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }

  &::before {
    content: "";
    ${mixin.coverParent}
    overflow: hidden;
    background: linear-gradient(
      to top,
      ${color.primary} 0%,
      rgba(0, 0, 0, 0) 40%
    );
  }
`;

const WhyUs = () => {
  return (
    <StyledWhyUs>
      <WhyUsBox1>
        <Title
          color1={color.secondary}
          color2={color.primary}
          margin="4rem auto 1rem auto"
          padding="0 3rem"
        >
          Why Us
        </Title>
        <Description
          after={false}
          color={color.secondary}
          margin="2rem 0"
          fontSize="1.6rem"
        >
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
      </WhyUsBox1>
      <WhyUsBox2>
        <div className="item">
          <div>
            <img src={Img1} alt="icon"></img>
            <span>Desktop</span>
          </div>
          <p>Desktop</p>
        </div>
        <div className="item">
          <div>
            <img src={Img2} alt="icon"></img>
            <span>Tablet</span>
          </div>
          <p>Tablet</p>
        </div>
        <div className="item">
          <div>
            <img src={Img3} alt="icon"></img>
            <span>Smartphone</span>
          </div>
          <p>Smartphone</p>
        </div>
      </WhyUsBox2>
      <WhyUsBox3>
        <img src={Img} alt="background"></img>
        <h5>Don't stop until it's perfect</h5>
      </WhyUsBox3>
    </StyledWhyUs>
  );
};

export default WhyUs;
