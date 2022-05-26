import * as React from "react";
import { m } from "framer-motion";
import Icon from "@components/icon";
import config from "@shared";
import { inUp, chained } from "@animations";
import { Items, Item } from "./styles";
import { prefersReducedMotionContext } from "@stores/reduceMotion.context";

interface SocialBarProps {
  vertical: boolean
};

const SocialBar: React.FC<SocialBarProps> = ({ vertical = false }) => {
  const channels = config.socialLinks;
  const { reducedMotion } = React.useContext(prefersReducedMotionContext);

  return (
    <m.div initial="initial" animate="animate">
      <Items variants={chained}>
        {channels.map((animation, i) => (
          <Item key={channels[i].icon} custom={reducedMotion} variants={inUp}>
            <a href={channels[i].url} aria-label={channels[i].message} rel="noopener noreferrer" target="_blank">
              <Icon name={channels[i].icon} />
            </a>
          </Item>
        ))}
      </Items>
    </m.div>
  )
};

export default SocialBar; 
