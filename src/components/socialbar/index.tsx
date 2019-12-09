import * as React from "react"
import Icon from "../icon"
import config from "../../config"
import { Items, Item } from "./styles"

interface SocialbarProps {
  vertical?: boolean
}

const Socialbar: React.FC<SocialbarProps> = ({ vertical = false }) => {
  const channels = config.socialLinks

  return (
    <Items>
      {channels.map((item, i) => (
        <Item key={`socialbar-item-${i}`}>
          <a href={item.url} title={item.message} rel="noopener noreferrer" target="_blank">
            <Icon name={item.icon} />
          </a>
        </Item>
      ))}
    </Items>
  )
}

export default Socialbar
