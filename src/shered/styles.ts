import { css } from "styled-components";
import Color from "color";

export const color = {
  primary: "#2AACE2",
  secondary: "#1F242D",
  tertiary: "#FEFEFE",
};

export const mixin = {
  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  coverViewport: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    bottom: 0;
  `,

  coverParent: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,

  darken: (colorValue: any, amount: any) =>
    Color(colorValue).darken(amount).string(),
  lighten: (colorValue: any, amount: any) =>
    Color(colorValue).lighten(amount).string(),
  rgba: (colorValue: any, opacity: any) =>
    Color(colorValue).alpha(opacity).string(),

  placeholderColor: (colorValue: any) => css`
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 0.8 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 0.8 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 0.8 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 0.8 !important;
    }
  `,
};
