import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { mediaSizes } from "../../assets/CSSMediaSizes";
import { maxMargin } from "../../assets/CSSRules";

const { desktopM, desktopS, tablet, mobileL, mobileS } = mediaSizes;

// Component Props Types

type MobileIconProps = {
  $primary?: boolean;
};

type SidebarProps = {
  $isOpen?: boolean;
};

type SidebarVariantProps = {
  $onSidebar?: boolean;
};

// Styled Components of Navigation Bar

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

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 1.5em;
  list-style: none;
  text-align: center;

  @media screen and (max-width: ${tablet}) {
    display: none;
  }
`;

export const NavLinksWrapper = styled.div<SidebarVariantProps>`
  display: flex;
  align-items: center;

  ${({ $onSidebar }) =>
    $onSidebar
      ? `
				flex-direction: column;
				gap: 1.5em;

				@media screen and (min-width: ${desktopM}) {
					display: none;
				}

	`
      : `
				@media screen and (max-width: ${desktopM}) {
					display: none;
				}
	`}
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StylishLink = styled(NavLink)`
  display: flex;
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

export const SearchBar = styled.input<SidebarVariantProps>`
  height: 2em;
  width: 18em;
  padding: 0.5em;
  margin: 0 1.5em;
  border: 1px solid #c6baf8;
  border-radius: 4px;
  opacity: 1;

  ${({ $onSidebar }) =>
    $onSidebar
      ? `
				margin: 0;

				@media screen and (min-width: ${desktopS}) {
				  display: none;
			  }
	`
      : `
				@media screen and (max-width: ${desktopS}) {
					display: none;
				}
	`}
`;

export const SearchIcon = styled.div<SidebarVariantProps>`
  position: relative;
  top: 2px;
  margin-left: -3em;
  margin-right: 3em;
  color: #7d8693;

  ${({ $onSidebar }) =>
    $onSidebar
      ? `
				margin-left: -2em;
				margin-right: 2em;

				@media screen and (min-width: ${desktopS}) {
				  display: none;
			  }
	`
      : `
				@media screen and (max-width: ${desktopS}) {
					display: none;
				}
	`}
`;

export const ContactButton = styled(NavLink)<SidebarVariantProps>`
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

  @media screen and (min-width: ${tablet}) and (max-width: ${desktopS}) {
    margin-right: 3.5em;
  }

  ${({ $onSidebar }) =>
    $onSidebar
      ? `
				@media screen and (min-width: ${tablet}) {
					display: none;
				}
				`
      : ``}
`;

export const MobileIcon = styled.div<MobileIconProps>`
  display: none;
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
					height: 100%;
				  position: absolute;
					right: 0;
					transform: translate(-100%, 45%);
				}
	`}
`;

// Styled Components of Sidebar

export const Sidebar = styled.aside<SidebarProps>`
  position: fixed;
  z-index: 999;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
	display: flex;
	flex-direction: column;
  gap: 1.5em;
  width: ${mobileS};
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #fff;
  opacity: ${({ $isOpen }) => ($isOpen ? "100%" : "0%")};
  transition: 0.3s ease-in-out;
`;

export const BGFilter = styled.div<SidebarProps>`
  position: absolute;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  z-index: 998;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: ${({ $isOpen }) => ($isOpen ? "10%" : "0%")};
  transition: 0.1s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  background: transparent;
  cursor: pointer;
  font-size: 1.8rem;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)``;
