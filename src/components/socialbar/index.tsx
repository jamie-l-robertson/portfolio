import * as React from "react";
import { motion } from "framer-motion";
import Icon from "@components/icon";
import config from "@shared";
import { inUp, chained } from "@animations";
import { Items, Item } from "./styles";

interface SocialBarProps {
  vertical: boolean
};

const SocialBar: React.FC<SocialBarProps> = ({ vertical = false }) => {
  const channels = config.socialLinks;

  return (
    <Items initial="before" animate="after" variants={chained}>
      {channels.map((animation, i) => (
        <Item key={channels[i].icon}>
          <a href={channels[i].url} aria-label={channels[i].message} rel="noopener noreferrer" target="_blank">
            <Icon name={channels[i].icon} />
          </a>
        </Item>
      ))}
    </Items>
  )
};

export default SocialBar; 
