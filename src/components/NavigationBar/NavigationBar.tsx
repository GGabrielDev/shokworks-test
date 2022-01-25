import React, {
  MouseEventHandler,
  ReactNode,
  VoidFunctionComponent,
} from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import { Logo } from "../AbstractedComponents";
import {
  ContactButton,
  MobileIcon,
  NavBar,
  NavBarWrapper,
  NavItem,
  NavLinksWrapper,
  NavMenu,
  SearchBar,
  SearchIcon,
} from "./NavigationBarComponents";

type NavigationBarProps = {
  toggle: MouseEventHandler;
  navLinks: ReactNode[];
};

const NavigationBar: VoidFunctionComponent<NavigationBarProps> = ({
  toggle,
  navLinks,
}) => {
  return (
    <NavBarWrapper>
      <Link to="/" style={{ display: "flex" }}>
        <Logo />
      </Link>
      <NavBar>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLinksWrapper>{navLinks}</NavLinksWrapper>
          <NavItem>
            <SearchBar placeholder="Search here" />
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </NavItem>
          <NavItem>
            <ContactButton to="/redirect" children="Contact Us" />
          </NavItem>
          <MobileIcon $primary onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavMenu>
      </NavBar>
    </NavBarWrapper>
  );
};

export default NavigationBar;
