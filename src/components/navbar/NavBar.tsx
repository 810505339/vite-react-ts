import React, {FC, useState} from 'react'
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon} from './NarBar.element'
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from 'react-icons'

const NavBar: FC = () => {
    const [state, setState] = useState(false)
    const handleClick = () => {
        setState(state => !state)
    }
    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to={'/'}>
                        <NavIcon/>
                        ULTRA
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {state ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    )
}

export default NavBar