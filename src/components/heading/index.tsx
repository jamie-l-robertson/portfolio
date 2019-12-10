import * as React from "react"
import StyledHeading from "./styles"

interface HeadingProps {
  level: string
  border?: boolean
  children: any
  rest?: any
  showDot?: boolean
}

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
      {showDot && <span aria-hidden="true">.</span>}
    </StyledHeading>
  )
}

export default Heading
