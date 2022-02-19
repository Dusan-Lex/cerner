import { useState } from "react";
import styled from "styled-components";
import Img from "../images/hero-image.png";
import Logo from "../images/logo.png";
import { color, mixin } from "../shered/styles";

const StyledHeroSlider = styled.section`
  width: 100%;
  height: 87vh;
  color: ${color.tertiary};
`;
const HeroBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    ${mixin.coverParent}
    overflow: hidden;
    background: linear-gradient(
      45deg,
      ${color.primary} 0%,
      rgba(0, 0, 0, 0) 50%
    );
  }
`;
const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 98%;
`;

const HeroContent = styled.div`
  ${mixin.coverParent}
  ${mixin.center}
	flex-direction: column;
`;

const HeroTitle1 = styled.h2`
  margin: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  text-align: center;
`;
const HeroTitle2 = styled(HeroTitle1)`
  position: absolute;
  width: 100%;
  margin: 3rem 0;
  bottom: 0;
`;

const HeroLogo = styled.img`
  @media only screen and (max-width: 400px) {
    width: 80%;
  }
`;

const HeroNav = styled.div`
  display: flex;
  div {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background-color: ${color.secondary};
    border-radius: 50%;
    border: 0.3rem solid ${color.tertiary};
    margin: 0 3rem;
    &.active {
      background-color: ${color.tertiary};
    }
    @media only screen and (max-width: 300px) {
      width: 1rem;
      height: 1rem;
    }
  }
`;
const sliderData = [
  { title: "Safe partner for your business 1" },
  { title: "Safe partner for your business 2" },
  { title: "Safe partner for your business 3" },
  { title: "Safe partner for your business 4" },
  { title: "Safe partner for your business 5" },
];
const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  return (
    <StyledHeroSlider>
      <HeroBox>
        <HeroImg src={Img}></HeroImg>
        <HeroContent>
          <HeroLogo src={Logo}></HeroLogo>
          <HeroTitle1>{sliderData[activeSlide].title}</HeroTitle1>
          <HeroNav>
            {sliderData.map((slide, index) => (
              <div
                key={index}
                className={index === activeSlide ? "active" : ""}
                onClick={() => {
                  setActiveSlide(index);
                }}
              ></div>
            ))}
          </HeroNav>
        </HeroContent>
        <HeroTitle2>Step into the world of opportunities</HeroTitle2>
      </HeroBox>
    </StyledHeroSlider>
  );
};

export default HeroSlider;
