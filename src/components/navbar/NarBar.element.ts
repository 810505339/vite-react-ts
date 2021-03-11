import styled from "styled-components";
import {Container} from "@/GlobalStyles";
import {Link} from 'react-router-dom';
import {FaMagento} from 'react-icons/fa'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  height: 80px;
  background: #101522;
  position: sticky;
  top: 0;
  z-index: 999;
`
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
`


export const NavIcon = styled(FaMagento)`
  margin-right: 0.5px;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`