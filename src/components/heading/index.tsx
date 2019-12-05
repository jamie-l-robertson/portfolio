import * as React from "react"
import StyledHeading from "./styles"

interface HeadingProps {
  level: string
  border?: boolean
  children: any
  rest?: any
}

const Heading: React.FC<HeadingProps> = ({
  level = "1",
  border = false,
  children,
  ...rest
}) => {
  return (
    <StyledHeading as={`h${level}`} hasBorder={border} {...rest}>
      {children}
    </StyledHeading>
  )
}

export default Heading
