import React from "react"
import { Link } from "gatsby"
import { string, arrayOf, shape } from "prop-types"
import { NavList, NavItem } from "./styles"

const Nav = ({ items }) => {
  return (
    <NavList>
      {items.map((item, i) => (
        <NavItem key={`nav-item${i}`}>
          <Link to={item.url}>{item.text}</Link>
        </NavItem>
      ))}
    </NavList>
  )
}

export default Nav

Nav.propTypes = {
  items: arrayOf(
    shape({
      url: string,
      text: string,
    })
  ),
}

Nav.defaultProps = {
  items: [],
}
