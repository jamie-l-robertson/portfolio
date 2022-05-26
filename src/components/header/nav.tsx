import * as React from "react"
import { urlContext } from "@stores/url.context"
import { prefersReducedMotionContext } from "@stores/reduceMotion.context"
import { inHorizontal, chained } from "@animations"
import { NavList, NavItem } from "./styles"

interface NavProps {
  items: [
    {
      url: string
      text: string
      isActive?: boolean
      type?: string
    }
  ]
}

const Nav: React.FC<NavProps> = ({ items }) => {
  const { url } = React.useContext(urlContext)
  const { reducedMotion } = React.useContext(prefersReducedMotionContext)

  return (
    <NavList initial="initial" animate="animate" variants={chained}>
      {items.map((item, i) => {
        return (
          <NavItem
            key={`nav-item${i}`}
            isActive={url.toLowerCase() === item.text.toLowerCase()}
            custom={reducedMotion}
            variants={inHorizontal}
          >
            {item.url && (
              <a href={item.url} {...item}>
                {item.text}
              </a>
            )}
          </NavItem>
        )
      })}
    </NavList>
  )
}

export default Nav
