import { Link } from "gatsby";
import * as React from "react";
import { motion } from "framer-motion";
import config from "@shared";
import { Inner } from "@theme";
import { inDown } from "@animations";
import Logo from "@components/logo";
import Nav from "./nav";
import { HeaderWrapper, LogoWrapper } from "./styles";

interface HeaderProps {
  siteTitle: string
};

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <Inner>
        <LogoWrapper to="/" aria-label="Back to homepage" initial="initial" animate="animate" variants={inDown}>
          <Logo />
        </LogoWrapper>

        <Nav items={config.navLinks} />
      </Inner>
    </HeaderWrapper>
  )
};

export default Header;
