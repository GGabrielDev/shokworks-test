import { ReactNode, VoidFunctionComponent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainButtonCSS } from "../AbstractedComponents";
import { mediaSizes } from "../../assets/CSSMediaSizes";

const { mobileS, mobileL } = mediaSizes;

// Component Props Types

type LandingBGProps = {
  $bg: string;
};

// Styled Components

export const LandingBG = styled.div<LandingBGProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 6em);
  background: center url(${({ $bg }) => $bg});
  overflow: hidden;
`;

export const LandingPicture = styled.img`
  width: auto;
  height: 50%;

  @media screen and (max-width: ${mobileL}) {
    width: 90%;
    height: auto;
  }
`;

export const LandingTitle = styled.h1`
  width: ${mobileS};
  padding: 0 1em;
  text-align: center;
  font: normal normal 600 2em "Poppins";
`;

export const LandingButtons = styled.div`
  display: flex;
  gap: 2em;
  justify-content: center;

  @media screen and (max-width: ${mobileL}) {
    gap: 1em;
  }
`;

export const LandingLinkButton = styled(Link)`
  ${MainButtonCSS}
`;
