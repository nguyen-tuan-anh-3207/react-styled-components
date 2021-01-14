import React, {useState, useEffect} from "react";
import { NavBarContainer, NavBarLogo, Nav, MobileIcon, NavLinks,NavMenu, NavItem, NavBtn, NavBtnLink } from "./NavBarElements";
import {FaBars} from 'react-icons/fa'; 
import {IconContext} from 'react-icons/lib';

const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () =>{
        if(window.scrollY >= 80) {
            setScrollNav(true);
        }else {
            setScrollNav(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    },[]);
  return (
        <IconContext.Provider value = {{color: '#fff'}}>
      <Nav scrollNav = {scrollNav}>
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
      </IconContext.Provider>
  );
};

export default NavBar;
