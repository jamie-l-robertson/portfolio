import { Link } from "gatsby";
import * as React from "react";
import { useSpring } from 'react-spring';
import config from "../../shared";
import { Inner } from "../../theme";
import Nav from "./nav";
import Logo from "../logo";
import { HeaderWrapper, LogoWrapper } from "./styles";

interface HeaderProps {
  siteTitle: string
};

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const springProps = useSpring(config.springs.logo);

  return (
    <HeaderWrapper>
      <Inner>
        <LogoWrapper to="/" aria-label="Back to homepage" style={{ ...springProps }} >
          <Logo />
        </LogoWrapper>

        <Nav items={config.navLinks} />
      </Inner>
    </HeaderWrapper>
  )
};

export default Header;
