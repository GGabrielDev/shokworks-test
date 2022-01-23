import { css } from "styled-components";
import { mediaSizes } from "./CSSMediaSizes";

const { desktopS } = mediaSizes;

export const maxMargin = css`
  padding: 0.5rem calc((100vw - ${desktopS}) / 2);
`;
