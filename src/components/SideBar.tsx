import React from "react";
import styled from "styled-components";
import { color } from "../shered/styles";
import SideBarListItem from "./SideBarListItem";

interface StyledSideBarProps {
  sidebar: boolean;
}

const StyledSideBar = styled.div<StyledSideBarProps>`
  position: fixed;
  z-index: 1000;
  right: 0;
  top: 8rem;
  width: 32rem;
  padding: 4rem 0;
  align-items: center;
  background-color: ${color.primary};
  transition: all 0.3s ease-in;
  visibility: ${(props) => (props.sidebar ? "visible" : "hidden")};
  opacity: ${(props) => (props.sidebar ? "1" : "0")};
  @media only screen and (max-width: 900px) {
    top: 10rem;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

const SideBarList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 3rem;
  color: ${color.secondary};
  text-align: right;
  @media only screen and (max-width: 400px) {
    text-align: center;
  }
`;

interface SideBarProps {
  sidebar: boolean;
}

const sidebarData = [
  { t: "Home", s: [] },
  { t: "About Us", s: ["About Us 1", "About Us 2", "About Us 3"] },
  { t: "Services", s: ["Service 1", "Service 2"] },
  { t: "Contact", s: [] },
];

const SideBar: React.FC<SideBarProps> = ({ sidebar }) => {
  return (
    <StyledSideBar sidebar={sidebar}>
      <SideBarList>
        {sidebarData.map((item, index) => (
          <SideBarListItem key={index} item={item}></SideBarListItem>
        ))}
      </SideBarList>
    </StyledSideBar>
  );
};

export default SideBar;
