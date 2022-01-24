import { css } from "styled-components";
import { mediaSizes } from "./CSSMediaSizes";

const { desktopM } = mediaSizes;

export const maxMargin = css`
  padding: 0.5rem calc((100vw - ${desktopM}) / 2);
`;
