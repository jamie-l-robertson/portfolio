import * as React from "react";
import { Link } from "gatsby";
import StyledLink from "./styles";

const CustomLink = ({
  external, href, children, className, isActive, showButton, ...props
}) =>
  (external ? (
    <StyledLink href={href} rel="noopener noreferrer" {...props}>
      {children}
    </StyledLink>
  ) : (
      <Link {...props}>
        <StyledLink className={className} isActive={isActive} showButton={showButton} {...props}>
          {children}
        </StyledLink>
      </Link>
    ));

export default CustomLink;


