import React, {
  useState,
  MouseEventHandler,
  ReactNode,
  VoidFunctionComponent,
} from "react";
import PropTypes from "prop-types";
import NavigationBar from "./NavigationBar/NavigationBar";
import SideBar from "./NavigationBar/SideBar";
import { NavItem, StylishLink } from "./NavigationBar/NavigationBarComponents";
import Footer from "./Footer/Footer";

type ComponentChilds = {
  children: ReactNode;
};

const navigationLinks = [
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

const Layout: VoidFunctionComponent<ComponentChilds> = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleNavbar: MouseEventHandler = () => {
    setToggle(!toggle);
  };

  const navElementsArray: ReactNode[] = navigationLinks.map((item) => {
    return (
      <NavItem key={`NavBar${item.name}`}>
        <StylishLink to={item.linkTo}>{item.name}</StylishLink>
      </NavItem>
    );
  });

  return (
    <>
      <NavigationBar toggle={toggleNavbar} navLinks={navElementsArray} />
      <SideBar
        isOpen={toggle}
        toggle={toggleNavbar}
        navLinks={navElementsArray}
      />
      {children}
      <Footer navLinks={navElementsArray} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
