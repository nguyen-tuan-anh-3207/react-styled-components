import React from "react";
import { NavBarContainer, NavBarLogo, Nav, MobileIcon, NavLinks,NavMenu, NavItem, NavBtn, NavBtnLink } from "./NavBarElements";
import {FaBars} from 'react-icons/fa'; 

const NavBar = ({toggle}) => {

  return (
    
      <Nav>
        <NavBarContainer>
          <NavBarLogo to= '/'>Dolla</NavBarLogo>
          <MobileIcon onClick = {toggle}>
              <FaBars />
          </MobileIcon>
          <NavMenu>
              <NavItem>
                  <NavLinks to = 'about'>About</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to = 'discover'>Discover</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to = 'services'>Services</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to = 'signup'>Sign Up</NavLinks>
              </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to = '/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    
  );
};

export default NavBar;
