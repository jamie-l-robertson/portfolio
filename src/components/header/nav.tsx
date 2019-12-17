import * as React from "react"
import { Link } from 'gatsby';
import { urlContext } from '../../store/url.context';
import { NavList, NavItem } from "./styles"

interface NavProps {
  items: [
    {
      url: string
      text: string
      isActive?: boolean
    }
  ]
}

const Nav: React.FC<NavProps> = ({ items }) => {
  const { url } = React.useContext(urlContext);

  return (
    <NavList>
      {items.map((item, i) => {
        return (
          <NavItem key={`nav-item${i}`} isActive={url.toLowerCase() === item.text.toLowerCase()}>
            {item.url && <a href={item.url}>{item.text}</a>}
          </NavItem>
        )
      })}
    </NavList>
  )
}

export default Nav
