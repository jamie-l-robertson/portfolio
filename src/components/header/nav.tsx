import * as React from "react"
import { Link } from "gatsby";
import { useTrail } from "react-spring";
import { urlContext } from "../../store/url.context";
import config from "../../shared";
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
  const trail = useTrail(items.length, config.springs.navHorizontal);

  return (
    <NavList>
      {trail.map((animation, i) => (
        <NavItem key={`nav-item${i}`} isActive={url.toLowerCase() === items[i].text.toLowerCase()} style={{ ...animation }}>
          {items[i].url && <a href={items[i].url}>{items[i].text}</a>}
        </NavItem>
      )
      )}
    </NavList >
  )
};

export default Nav;
