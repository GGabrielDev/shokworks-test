import { VoidFunctionComponent } from "react";
import styled, { css } from "styled-components";
import { mediaSizes } from "../assets/CSSMediaSizes";

const { mobileL } = mediaSizes;

// Component Prop Types

type MainButtonProps = {
  $primary?: boolean;
};

// Abstracted CSS Rule sets

export const MainButtonCSS = css<MainButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.7em;
  width: 10em;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background: transparent linear-gradient(248deg, #1b92c8 0%, #2c3636 100%) 0%
    0% no-repeat padding-box;
`;

// Styled Components

export const LogoImg = styled.img`
  display: flex;
  width: auto;
  align-self: center;
  padding: 0 3em;

  @media screen and (max-width: ${mobileL}) {
    padding: 0 1.5em;
    width: 70%;
    height: auto;
  }
`;

// Functional Components

export const Logo: VoidFunctionComponent = () => {
  return (
    <LogoImg src={require("../assets/img/MainLogo.png")} alt="Shokworks" />
  );
};
