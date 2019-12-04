import React from "react"
import StyledHeading from "./styles"

const Heading = ({ level = 1, border = false, children, ...rest }) => {
  return (
    <StyledHeading as={`h${level}`} hasBorder={border} {...rest}>
      {children}
    </StyledHeading>
  )
}

export default Heading

Heading.defaultProps = {
  level: 1,
  children: "",
  border: false,
}
