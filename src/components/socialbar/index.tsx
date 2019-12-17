import * as React from "react";
import { useTrail, animated } from "react-spring";
import Icon from "../icon";
import config from "../../shared";
import { Items, Item } from "./styles";

interface SocialBarProps {
  vertical?: boolean
};

const SocialBar: React.FC<SocialBarProps> = ({ vertical = false }) => {
  const channels = config.socialLinks;
  const trail = useTrail(channels.length, config.springs.iconsHorizontal);

  return (
    <Items>
      {trail.map((animation, i) => (
        <Item key={i} style={{ ...animation }}>
          <a href={channels[i].url} aria-label={channels[i].message} rel="noopener noreferrer" target="_blank">
            <Icon name={channels[i].icon} />
          </a>
        </Item>
      ))}
    </Items>
  )
};

export default SocialBar; 
