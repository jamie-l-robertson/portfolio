import * as React from "react"
import { Link } from "gatsby"
import { NavList, NavItem } from "./styles"

interface NavProps {
  items: [
    {
      url: string
      text: string
    }
  ]
}

const Nav: React.FC<NavProps> = ({ items }) => {
  return (
    <NavList>
      {items.map((item, i) => (
        <NavItem key={`nav-item${i}`}>
          {item.url && <Link to={item.url}>{item.text}</Link>}
        </NavItem>
      ))}
    </NavList>
  )
}

export default Nav
