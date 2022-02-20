import styled from "styled-components";

interface StyledTitleProps {
  color1: string;
  color2: string;
  margin: string;
  padding?: string;
}

const StyledTitle = styled.h3<StyledTitleProps>`
  position: relative;
  width: -moz-fit-content;
  width: fit-content;
  padding: ${(props) => props.padding || "0 0.5rem"};
  margin: 0;
  font-size: 4rem;
  font-weight: 400;
  font-family: "Playfair Display", serif;
  color: ${(props) => props.color1};
  margin: ${(props) => props.margin};
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.color2};
  }
`;

const Title = ({
  children,
  color1,
  color2,
  margin,
  padding,
}: {
  children: string;
  color1: string;
  color2: string;
  margin: string;
  padding?: string;
}) => {
  return (
    <StyledTitle
      color1={color1}
      color2={color2}
      margin={margin}
      padding={padding}
    >
      {children}
    </StyledTitle>
  );
};

export default Title;
