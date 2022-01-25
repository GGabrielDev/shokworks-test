import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainButtonCSS } from "../AbstractedComponents";
import { mediaSizes } from "../../assets/CSSMediaSizes";
import { maxMargin } from "../../assets/CSSRules";

const { mobileL, tablet } = mediaSizes;

// Components Props Types

type InfoCardProps = {
  $altFlex?: boolean;
};

type InfoBackCircleProps = {
  $transform?: string;
};

type DualSquaresProps = {
  $xPos: number;
  $yPos: number;
  $mainSize: number;
  $altTranslatePos: string;
  $altMainSize: number;
};

type ImageElipsisProps = {
  $xPos: number;
  $yPos: number;
  $width: number;
};

// Styled Components

export const InfoCard = styled.div<InfoCardProps>`
  ${maxMargin}
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: ${({ $altFlex }) => ($altFlex ? "row-reverse" : "row")};
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;

  @media screen and (max-width: ${tablet}) {
    gap: 0em;
    margin: 4em 0;
  }
`;

export const InfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 30em;
  align-items: flex-start;
	justify-content: center;

  @media screen and (max-width: ${tablet}) {
    padding: 0 2em;
  }
`;

export const InfoTitle = styled.h2`
  margin: 0;
  font: normal normal normal 1.75em "Montserrat";
`;

export const InfoContent = styled.p`
  font: normal normal normal 0.8em "Poppins";
`;

export const InfoButton = styled(Link)`
  ${MainButtonCSS}
`;

export const InfoImageWrapper = styled.div`
  display: flex;
  width: 35em;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InfoImage = styled.img`
  width: auto;
  height: 75%;

  @media screen and (max-width: ${mobileL}) {
    width: 90%;
    height: auto;
  }
`;

export const InfoBackCircle = styled.div<InfoBackCircleProps>`
  width: 450px;
  height: 450px;
  position: absolute;
  top: 15%;
  right: 10%;
  z-index: -5;
  border-radius: 50%;
  background: #0000ff05 0% 0% no-repeat padding-box;
  background-blend-mode: multiply;

  @media screen and (max-width: ${mobileL}) {
    top: 5%;
    right: 15%;
  }

  ${({ $transform }) =>
    $transform ? `transform: translate(${$transform})` : ""}
`;

export const DualSquares = styled.div<DualSquaresProps>`
  position: absolute;
  ${({ $mainSize, $xPos, $yPos }) => `
		width: ${$mainSize}px;
		height: ${$mainSize}px;
	  top: ${$yPos}%;
		right: ${$xPos}%;
	`}
  z-index: -2;
  border-radius: 0.25em;
  background: #0000ff0f 0% 0% no-repeat padding-box;
  background-blend-mode: overlay;

  &:after {
    content: "";
    position: absolute;
    ${({ $altMainSize, $altTranslatePos }) => `
		  width: ${$altMainSize}px;
			height: ${$altMainSize}px;
			transform: translate(${$altTranslatePos});
		`}
    z-index: -1;
    border-radius: 0.25em;
    background: #0000ff0f 0% 0% no-repeat padding-box;
    background-blend-mode: multiply;
  }
`;

export const ImageElipsis = styled.div<ImageElipsisProps>`
  position: absolute;
  ${({ $width, $xPos, $yPos }) => `
		width: ${$width}%;
		height: 0.6em;
		top: ${$yPos}%;
		right: ${$xPos}%;
	`}
  z-index: -1;
  border-radius: 50%;
  background: #0000ff1a 0% 0% no-repeat padding-box;
  background-blend-mode: multiply;
`;
