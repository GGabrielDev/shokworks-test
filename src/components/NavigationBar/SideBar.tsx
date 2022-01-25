import React, {
  MouseEventHandler,
  ReactNode,
  VoidFunctionComponent,
} from "react";
import { FaSearch } from "react-icons/fa";
import {
  Sidebar,
  SidebarWrapper,
  Icon,
  CloseIcon,
  BGFilter,
  NavItem,
  SearchBar,
  SearchIcon,
  NavLinksWrapper,
  ContactButton,
} from "./NavigationBarComponents";

type SideBarProps = {
  isOpen: boolean;
  toggle: MouseEventHandler;
  navLinks: ReactNode[];
};

const SideBar: VoidFunctionComponent<SideBarProps> = ({
  isOpen,
  toggle,
  navLinks,
}) => {
  return (
    <SidebarWrapper>
      <BGFilter $isOpen={isOpen} onClick={toggle} />
      <Sidebar $isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <NavItem>
          <SearchBar $onSidebar placeholder="Search Here" />
          <SearchIcon $onSidebar>
            <FaSearch />
          </SearchIcon>
        </NavItem>
        <NavLinksWrapper $onSidebar>{navLinks}</NavLinksWrapper>
        <NavItem>
          <ContactButton $onSidebar to="/redirect">
            Contact Us
          </ContactButton>
        </NavItem>
      </Sidebar>
    </SidebarWrapper>
  );
};

export default SideBar;
