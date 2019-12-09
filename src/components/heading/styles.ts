import styled, { css } from "styled-components"
import breakpoint from "styled-components-breakpoint"
import { rem } from "polished"

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
        margin-top: 35px;
        background-color: ${props.theme.color.quaternary};
      }
    `}

    > span {
      font-size: ${rem('40px')};
      color: ${props => props.theme.color.quaternary}

      ${breakpoint('tablet')`
        font-size: ${rem('60px')};
      `};
    }
`

export default StyledHeading
