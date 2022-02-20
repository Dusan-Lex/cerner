import styled, { css } from "styled-components";
import { color, mixin } from "../shered/styles";
import LogoImg from "../images/logo-small.png";
import { useState } from "react";
import SideBar from "./SideBar";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  color: ${color.tertiary};
  opacity: 0.9;
  width: 100%;
  min-height: 6rem;
  background-color: ${color.secondary};
  display: flex;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const HeaderContact = styled.div`
  width: 50%;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  div {
    padding: 0.5rem 2rem;
    @media only screen and (max-width: 300px) {
      padding: 0.5rem;
    }
    &:first-child {
      border-right: 2px solid ${color.tertiary};
    }
  }
  @media only screen and (max-width: 900px) {
    background-color: ${color.tertiary};
    color: ${color.secondary};
    font-weight: 600;
    width: 100%;
    justify-content: center;
  }
`;

const LogoMenu = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  transform: translateX(-50%);
  width: 4.5rem;
  @media only screen and (max-width: 900px) {
    transform: translateX(40%);
  }
`;

interface MenuBtnProps {
  sidebar: boolean;
}

const MenuBtn = styled.div<MenuBtnProps>`
  width: 6rem;
  height: 6rem;
  background-color: ${color.primary};
  ${mixin.center};
  flex-direction: column;
  cursor: pointer;

  span {
    position: relative;
    width: 55%;
    display: block;
    height: 2.5px;
    background-color: ${color.tertiary};
    transition-property: transform, width, background-color;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);

    &:not(:last-child) {
      margin-bottom: 0.7rem;
    }

    &:first-child {
      ${(props) =>
        props.sidebar
          ? css`
              width: 26%;
              transform: rotate(45deg) translate(0px, 0.73rem);
            `
          : ""}
    }
    &:last-child {
      ${(props) =>
        props.sidebar
          ? css`
              width: 26%;
              transform: rotate(45deg) translate(0px, -0.73rem);
            `
          : ""}
    }
    &:nth-child(2) {
      ${(props) =>
        props.sidebar
          ? css`
              width: 50%;
              transform: rotate(-45deg);
            `
          : ""}
    }
  }
  @media only screen and (max-width: 900px) {
    margin-left: auto;
  }
`;

const Header = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <>
      <StyledHeader>
        <HeaderContact>
          <div>info@emailadresa.com</div>
          <div>065/555 55 55</div>
        </HeaderContact>
        <LogoMenu>
          <Logo src={LogoImg} />
          <MenuBtn
            sidebar={sidebar}
            onClick={() => {
              setSidebar(!sidebar);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuBtn>
        </LogoMenu>
      </StyledHeader>
      <SideBar sidebar={sidebar} />
    </>
  );
};

export default Header;
