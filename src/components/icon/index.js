import React from "react"
import {
  Github,
  ExternalLink,
  AlertOctagon,
  ArrowRightCircle,
  ArrowDownCircle,
  Award,
  Bookmark,
  Linkedin,
  Star,
  Folder,
  Mail,
  Link,
  MessageSquare,
  Smartphone,
  Tablet,
  Facebook,
  Twitter,
  XOctagon,
} from "styled-icons/feather"

const IconMap = {
  Github,
  ExternalLink,
  AlertOctagon,
  ArrowRightCircle,
  ArrowDownCircle,
  Award,
  Bookmark,
  Linkedin,
  Star,
  Folder,
  Mail,
  Link,
  MessageSquare,
  Smartphone,
  Tablet,
  Facebook,
  Twitter,
  XOctagon,
}

const Icon = ({ name, size = 24, ...rest }) => {
  const Tag = IconMap[name]

  return <Tag size={size} {...rest} />
}

export default Icon

Icon.defaultProps = {
  name: Github,
}
