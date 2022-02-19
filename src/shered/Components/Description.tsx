import styled from "styled-components";

interface StyledDescriptionProps {
  color: string;
  margin: string;
  fontSize: string;
  after: boolean;
}

const StyledDescription = styled.p<StyledDescriptionProps>`
  position: relative;
  display: inline-block;
  padding: 3rem 0;
  font-weight: 400;
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0"};
  font-size: ${(props) => props.fontSize || "1.6rem"};
  line-height: 3rem;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 30%;
    background-color: ${(props) => props.color};
    visibility: ${(props) => (props.after ? "visible" : "hidden")};
  }
`;

const Description = ({
  children,
  color,
  margin,
  fontSize,
  after,
}: {
  children: string;
  color: string;
  margin: string;
  fontSize: string;
  after: boolean;
}) => {
  return (
    <StyledDescription
      after={after}
      color={color}
      margin={margin}
      fontSize={fontSize}
    >
      {children}
    </StyledDescription>
  );
};

export default Description;
