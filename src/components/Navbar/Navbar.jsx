import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn,
    NavBtnLink
} from './NavStyle.js';

const Navbar = ({ toggle }) => {
    return (
        <>
          <Nav>
              <NavContainer>
                  <NavLogo to="/" >DVsoft</NavLogo>
                  <MobileIcon onClick={toggle} >
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about'>About </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='discover'>Discover </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='services'>Services </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='singup'>Sing Up </NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                  </NavBtn>
              </NavContainer>
          </Nav>
        </>
    )
}

export default Navbar

