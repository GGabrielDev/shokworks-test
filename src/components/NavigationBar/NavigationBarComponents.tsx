import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { mediaSizes } from "../../assets/CSSMediaSizes";
import { maxMargin } from "../../assets/CSSRules";

const { desktopM, desktopS, mobileL } = mediaSizes;

// Component Props Types

type MobileIconProps = {
  $primary?: boolean;
};

// Styled Components

export const NavBarWrapper = styled.nav`
  display: flex;
  position: sticky;
  justify-content: space-between;
  z-index: 10;
  top: 0;
  height: 6em;
  width: 100%;
`;

export const NavBar = styled.div`
  ${maxMargin}
  display: flex;
  align-items: flex-end;
  background: #ffffff;

  @media screen and (max-width: ${desktopS}) {
    transition: 0.8s all ease;
  }
`;

export const Logo = styled.img`
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

export const StylishLink = styled(NavLink)`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 1.5em;
  color: #000;
  cursor: pointer;
  text-decoration: none;

  &.active {
    color: #185f7f;
    font-weight: 600;

    :before {
      content: "";
      position: relative;
      top: 1em;
      left: 50%;
      border: 4px solid #185f7f;
      border-radius: 100%;
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 1.5em;
  list-style: none;
  text-align: center;

  @media screen and (max-width: ${desktopS}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${desktopM}) {
    display: none;
  }
`;

export const MobileIcon = styled.div<MobileIconProps>`
  display: none;
  color: #000000;
  cursor: pointer;
  font-size: 1.8em;
	line-height: 0;

  ${({ $primary }) =>
    $primary
      ? `
				@media screen and (min-width: ${desktopS}) and (max-width: ${desktopM}) {
					display: block;
					height: 100%;
				}
			`
      : `
				@media screen and (max-width: ${desktopS}) {
					display: block;
				  position: absolute;
					top: 0;
					right: 0;
					transform: translate(-100%, 50%);
				}
	`}
`;

export const SearchBar = styled.input`
  height: 2em;
  padding: 0.5em;
  margin: 0 1.5em;
  border: 1px solid #c6baf8;
	border-radius: 4px;
	opacity: 1;
`;

export const SearchIcon = styled.div`
  position: relative;
  top: 2px;
  margin-left: -3em;
  margin-right: 3em;
  color: #7d8693;
`;

export const ContactButton = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.7em;
  width: 10em;
  margin-right: 1.5em;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  background: transparent linear-gradient(248deg, #1b92c8 0%, #2c3636 100%) 0%
    0% no-repeat padding-box;
`;
