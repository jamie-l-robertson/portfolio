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
    <motion.div initial="initial" animate="animate">
      <Items variants={chained}>
        {channels.map((animation, i) => (
          <Item key={channels[i].icon} variants={inUp}>
            <a href={channels[i].url} aria-label={channels[i].message} rel="noopener noreferrer" target="_blank">
              <Icon name={channels[i].icon} />
            </a>
          </Item>
        ))}
      </Items>
    </motion.div>
  )
};

export default SocialBar; 
