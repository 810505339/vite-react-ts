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
  color: #fff;

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
export const NavMenu = styled.ul<{ state: boolean }>`
  display: flex;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({state}) => state ? 0 : '-100%'};
    transition: all 0.5s ease;
    opacity: 1;
    background: #101522;
`

export const NavItem = styled.li`

  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border-bottom: none;
    }
  }
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 100%;
  padding: 0.5rem 1rem;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`