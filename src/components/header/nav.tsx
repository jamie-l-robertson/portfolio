import * as React from "react"
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { urlContext } from "@stores/url.context";
import { prefersReducedMotionContext } from "@stores/reduceMotion.context";
import config from "@shared";
import { inHorizontal, chained } from "@animations";
import { NavList, NavItem } from "./styles";

interface NavProps {
  items: [
    {
      url: string
      text: string
      isActive?: boolean
    }
  ]
};

const Nav: React.FC<NavProps> = ({ items }) => {
  const { url } = React.useContext(urlContext);
  const { reducedMotion } = React.useContext(prefersReducedMotionContext);

  return (
    <NavList initial="initial" animate="animate" variants={chained}>
      {items.map((animation, i) => (
        <NavItem key={`nav-item${i}`}
          isActive={url.toLowerCase() === items[i].text.toLowerCase()}
          custom={reducedMotion}
          variants={inHorizontal}>
          {items[i].url && <a href={items[i].url}>{items[i].text}</a>}
        </NavItem>
      )
      )}
    </NavList>
  )
};

export default Nav;
