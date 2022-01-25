import styled from "styled-components";

// Component Props Types

type FooterWrapperProps = {
  $primary?: boolean;
};

type SocialIconsProps = {
  $color?: string;
};

// Styled Components

export const FooterWrapper = styled.div<FooterWrapperProps>`
  display: flex;
  height: inherit;
  width: inherit;
  align-items: top;
  justify-content: center;
  gap: 1em;

  ${({ $primary }) =>
    $primary
      ? `
				flex-direction: column;
				gap: 4em;
		  `
      : `
				flex-wrap: wrap;
			`}
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
  width: 15em;
  height: auto;
`;

export const FooterSectionTitle = styled.h3`
  margin: 0;
  font-weight: 500;
`;

export const ContactLine = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
`;

export const ContactIcon = styled.div`
  font-size: 1.5em;
  color: #9d60eb;
`;

export const FooterSocialLinks = styled.a`
  color: #000;
  text-decoration: none;
`;

export const FooterSocialIcons = styled.div`
  display: flex;
  gap: 1.25em;
  justify-content: center;
`;

export const FooterSocialIcon = styled.a<SocialIconsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  font-size: 1.25em;
  color: #fff;
  border-radius: 50%;
  background: ${({ $color }) => ($color ? $color : "#000")};
`;

export const FooterBottomWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 15em;
  overflow: hidden;
  margin-top: -6em;
`;

export const FooterBottom1 = styled.div`
  position: absolute;
  z-index: -2;
  bottom: 0;
  width: 100%;
  height: 110%;
  margin: 0 auto;
  background: transparent linear-gradient(4deg, #ffffff 0%, #dff0ff 100%) 0% 0%
    no-repeat padding-box;
  transform: translateY(30%) skewY(-4deg);
  opacity: 1;
`;

export const FooterBottom2 = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 110%;
  margin: 0 auto;
  background: transparent linear-gradient(4deg, #ffffff -1%, #d4ecff 100%) 0% 0%
    no-repeat padding-box;
  transform: translateY(45%) skewY(-4deg);
  opacity: 1;
`;
