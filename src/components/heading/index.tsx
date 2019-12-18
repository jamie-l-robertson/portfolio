import * as React from "react";
import { animated, useSpring } from "react-spring";
import config from "@shared";
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
  const springProps = useSpring(config.springs.headingDot);

  return (
    <StyledHeading as={`h${level}`} hasBorder={border} {...rest}>
      {children}
      {showDot && <animated.span aria-hidden="true" style={{ ...springProps }}>.</animated.span>}
    </StyledHeading>
  )
};

export default Heading;
