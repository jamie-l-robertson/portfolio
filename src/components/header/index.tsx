import { Link } from "gatsby"
import * as React from "react"
import config from "../../config"
import { Inner } from "../../theme"
import Nav from "./nav"
import { HeaderWrapper, Burger, BurgerBox } from "./styles"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <HeaderWrapper>
    <Inner>
      <Link to="/">J</Link>
      <Burger>
        <BurgerBox />
      </Burger>
      <Nav items={config.navLinks} />
    </Inner>
  </HeaderWrapper>
)

export default Header
