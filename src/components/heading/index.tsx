import * as React from "react";
import { motion } from "framer-motion";
import config from "@shared";
import { delayedFade } from "@animations";
import StyledHeading from "./styles";

interface HeadingProps {
  level: string
  border?: boolean
  children: any
  rest?: any
  showDot?: boolean
};

const Heading: React.FC<HeadingProps> = ({
  level = "1",
  border = false,
  showDot = false,
  children,
  ...rest
}) => {

  return (
    <StyledHeading as={`h${level}`} hasBorder={border} {...rest}>
      {children}
      {showDot && <motion.span aria-hidden="true" initial="initial" animate="animate" variants={delayedFade}>.</motion.span>}
    </StyledHeading>
  )
};

export default Heading;
