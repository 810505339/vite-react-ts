import React, {FC, useState} from 'react'
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLink} from './NarBar.element'
import {FaBars, FaTimes} from "react-icons/fa";


const NavBar: FC = () => {
    const [state, setState] = useState(false)
    const handleClick = () => {
        setState(state => !state)
    }
    return (

        <Nav>
            <NavbarContainer>
                <NavLogo to={'/'}>
                    <NavIcon/>
                    ULTRA
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {state ? <FaTimes/> : <FaBars/>}
                </MobileIcon>
                <NavMenu state={state}>
                    <NavItem>
                        <NavLink to={'/'}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={'/Services'}>Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={'/Products'}>Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={'/home'}>Home</NavLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default NavBar