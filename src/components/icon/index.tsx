import * as React from "react";
import {
  Github,
  ExternalLink,
  AlertOctagon,
  ArrowRightCircle,
  ArrowDownCircle,
  ArrowUpCircle,
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
  User,
  Tag,
  Home,
  Codepen,
} from "styled-icons/feather";

const IconMap = {
  Github,
  ExternalLink,
  AlertOctagon,
  ArrowRightCircle,
  ArrowDownCircle,
  ArrowUpCircle,
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
  User,
  Tag,
  Home,
  Codepen,
};

interface IconProps {
  name: string
  size?: number
  rest?: any
  title?: string
};

const Icon: React.FC<IconProps> = ({ name = "", size = 24, ...rest }) => {
  const Tag = IconMap[name];
  return <Tag size={size} {...rest} />
};

export default Icon;
