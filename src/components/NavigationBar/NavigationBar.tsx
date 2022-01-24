import React, { ReactNode, VoidFunctionComponent } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import {
  ContactButton,
  Logo,
  MobileIcon,
  NavBar,
  NavBarWrapper,
  NavItem,
  NavLinksWrapper,
  NavMenu,
  SearchBar,
  SearchIcon,
  StylishLink,
} from "./NavigationBarComponents";

const navigationBarLink = [
  {
    name: "Home",
    linkTo: "/",
  },
  {
    name: "About",
    linkTo: "/redirect",
  },
  {
    name: "Portfolio",
    linkTo: "/redirect",
  },
  {
    name: "Product",
    linkTo: "/redirect",
  },
  {
    name: "Career",
    linkTo: "/redirect",
  },
  {
    name: "Blog",
    linkTo: "/redirect",
  },
];

const NavigationBar: VoidFunctionComponent = () => {
  const navLinks: ReactNode[] = [];
  navigationBarLink.forEach((item) => {
    navLinks.push(
      <NavItem key={`Nav${item.name}`}>
        <StylishLink to={item.linkTo}>{item.name}</StylishLink>
      </NavItem>
    );
  });

  return (
    <NavBarWrapper>
      <Link to="/" style={{ display: "flex" }}>
        <Logo src={require("../../assets/img/MainLogo.png")} alt="Shokworks" />
      </Link>
      <NavBar>
        <MobileIcon>
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
          <MobileIcon $primary>
            <FaBars />
          </MobileIcon>
        </NavMenu>
      </NavBar>
    </NavBarWrapper>
  );
};

export default NavigationBar;
