import { useState } from "react";
import styled from "styled-components";
import { color, mixin } from "../shered/styles";

const Arrow = ({ open }: { open: boolean }) => {
  return (
    <span
      style={{
        display: "inline-block",
        marginLeft: "2rem",
        transform: `rotate(${open ? -90 : 90}deg)`,
      }}
    >
      &#10095;
    </span>
  );
};

interface StyledSideBarListItemProps {
  open: boolean;
}
const StyledSideBarListItem = styled.li<StyledSideBarListItemProps>`
  padding: 2rem 5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.open && mixin.darken(color.primary, 0.4)};
  &:hover {
    color: ${color.tertiary};
  }
  div {
    padding: 1rem;
  }
`;

const SubDiv = styled.div<{ open: boolean }>`
  width: 100%;
  display: ${(props) => (props.open ? "block" : "none")};
  &:hover {
    color: ${mixin.darken(color.tertiary, 0.35)};
  }
`;

interface SideBarListItemProps {
  item: { t: string; s: string[] };
}

const SideBarListItem: React.FC<SideBarListItemProps> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <StyledSideBarListItem
      open={open}
      onMouseLeave={() => {
        item.s.length !== 0 && open && setOpen(!open);
      }}
    >
      <div
        onClick={() => {
          item.s.length !== 0 && setOpen(!open);
        }}
      >
        {item.t} {item.s.length !== 0 && <Arrow open={open} />}
      </div>
      {item.s.length !== 0 &&
        item.s.map((subitem, index) => (
          <SubDiv key={index} open={open}>
            {subitem}
          </SubDiv>
        ))}
    </StyledSideBarListItem>
  );
};

export default SideBarListItem;
