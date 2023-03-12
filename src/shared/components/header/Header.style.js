import styled from "styled-components"
import { customColors } from "../../../styles/theme"
import { screenSizes } from "../../../utilities/helpers"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 8px 0px;
`
export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`
export const LogoText = styled.div``

export const HeaderDivider = styled.div`
  flex: 1;
`
export const NavItems = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  @media (max-width: ${screenSizes.md}px) {
    display: none;
  }
`
export const NavItem = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
    text-decoration: underline;
  }
`
export const Hamburger = styled.div`
  display: none;
  img {
    width: 100%;
  }
  @media (max-width: ${screenSizes.md}px) {
    display: block;
  }
`
export const MobileNavItems = styled.div`
  display: none;
  @media (max-width: ${screenSizes.md}px) {
    display: block;
    position: absolute;
    /* left: 60%; */
    right: 55px;
    top: 7%;
    padding: 16px 32px;
    background: ${customColors?.black};
    border-radius: 20px;
    display: ${({ hamburgerOpen }) => hamburgerOpen ? 'block': 'none'};
  }
`
export const MobileNavItem = styled.div`
  @media (max-width: ${screenSizes.md}px) {
    padding-bottom: 16px;
  }
`