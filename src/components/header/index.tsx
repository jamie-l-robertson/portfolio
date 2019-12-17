import { Link } from "gatsby"
import * as React from "react"
import config from "../../config"
import { Inner } from "../../theme"
import Nav from "./nav"
import Logo from "../logo"
import { HeaderWrapper, LogoWrapper } from "./styles"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <HeaderWrapper>
    <Inner>
      <LogoWrapper to="/" aria-label="Jamie Robertson, Back to homepage">
        <Logo />
      </LogoWrapper>

      <Nav items={config.navLinks} />
    </Inner>
  </HeaderWrapper>
)

export default Header
