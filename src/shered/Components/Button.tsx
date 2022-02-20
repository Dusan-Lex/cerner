import styled from "styled-components";
import { mixin } from "../styles";

interface StyledButtonProps {
  color: string;
  bgColor?: string;
  padding?: string;
  margin?: string;
  fontSize: string;
  after: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  overflow: hidden;
  padding: ${(props) => props.padding || "2rem 6rem"};
  width: -moz-fit-content;
  width: fit-content;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor || "white"};
  margin: ${(props) => props.margin || "0"};
  font-size: ${(props) => props.fontSize || "1.6rem"};
  font-weight: 600;
  cursor: pointer;

  &::after {
    content: "";
    ${mixin.center};
    position: absolute;
    top: 0;
    right: 0;
    height: 10rem;
    width: 10rem;
    transform: translateX(5rem) scale(0);
    transition: all 0.2s ease;
    background-color: ${(props) => mixin.darken(props.bgColor, 0.3)};
    border-radius: 50%;
    display: ${(props) => (props.after ? "block" : "none")};
  }

  &:hover::after {
    transform: translateX(5rem) scale(1);
  }

  span {
    position: absolute;
    right: 0;
    z-index: 10;
    transform: translateY(-2px);
    width: 4rem;
  }

  @media only screen and (max-width: 900px) {
    margin: ${(props) => props.margin};
  }
`;

const Button = ({
  children,
  color,
  bgColor,
  margin,
  fontSize,
  after,
  padding,
}: {
  children: string;
  color: string;
  bgColor?: string;
  padding?: string;
  margin?: string;
  fontSize: string;
  after: boolean;
}) => {
  return (
    <StyledButton
      color={color}
      bgColor={bgColor}
      padding={padding}
      margin={margin}
      fontSize={fontSize}
      after={after}
    >
      {children}
      <span>&#10140;</span>
    </StyledButton>
  );
};

export default Button;
