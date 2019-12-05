import styled, { css } from "styled-components"

interface StyledHeadingProps {
  readonly hasBorder: boolean
}

const StyledHeading = styled.h1<StyledHeadingProps>`
  position: relative;
  margin-bottom: 40px;

  ${props =>
    props.hasBorder === true &&
    css`
      &::after {
        display: block;
        content: "";
        height: 3px;
        width: 80px;
        margin-top: 15px;
        background-color: ${props.theme.color.quaternary};
      }
    `}
`

export default StyledHeading
