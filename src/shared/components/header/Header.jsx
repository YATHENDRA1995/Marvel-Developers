import { useState } from "react";

import {
  Brand,
  Hamburger,
  HeaderContainer,
  HeaderDivider,
  LogoText,
  MobileNavItem,
  MobileNavItems,
  NavItem,
  NavItems,
} from "./Header.style";
import LogoImage from "../../../assets/images/logo-white.svg";
import HamburgerIcon from "../../../assets/images/hamburger.png";
import { headerNavItems } from "../../../utilities/data";
import { BoldText, StyledButton } from "../../../styles/sharedStyles";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <HeaderContainer>
      <Brand>
        <img src={LogoImage} alt="" />
        <LogoText>
          <BoldText> | Developers</BoldText>
        </LogoText>
      </Brand>
      <HeaderDivider />
      <NavItems>
        {headerNavItems?.map((item) => (
          <NavItem key={item.key}>{item?.label}</NavItem>
        ))}
        <StyledButton variant="secondary">
          <BoldText>Sign up free</BoldText>
        </StyledButton>
      </NavItems>

      {/* Mobile Nav Items */}
      <Hamburger>
        <img
          src={HamburgerIcon}
          alt=""
          onClick={() => setHamburgerOpen((prev) => !prev)}
        />
        <MobileNavItems hamburgerOpen={hamburgerOpen}>
          {headerNavItems?.map((item) => (
            <MobileNavItem key={item.key}>{item?.label}</MobileNavItem>
          ))}
          <StyledButton variant="secondary">
            <BoldText>Sign up free</BoldText>
          </StyledButton>
        </MobileNavItems>
      </Hamburger>
    </HeaderContainer>
  );
};

export default Header;
