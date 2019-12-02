import { Link } from "gatsby"
import { string } from "prop-types"
import React from "react"
import config from "../../config"

import Nav from "./nav"
import { HeaderWrapper, Burger, BurgerBox } from "./styles"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/">J</Link>
    <Burger>
      <BurgerBox />
    </Burger>
    <Nav items={config.navLinks} />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
