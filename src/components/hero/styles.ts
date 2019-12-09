import styled from "styled-components"
import breakpoint from 'styled-components-breakpoint'
import { rem } from 'polished'
import { Container } from "../../theme"

const HeroWrapper = styled(Container)`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p > a {
    border-bottom: 1px dotted currentColor
  }
`

const Heading = styled.h1`
  display: block;
  font-size: ${rem('50px')};

  ${breakpoint('tablet')`
    font-size: ${rem('60px')};
  `};
`

const Prefix = styled.span`
  display: block;
  margin-bottom: ${rem('10px')};
  color: ${props => props.theme.color.quaternary};
  font-size: ${props => props.theme.font.prefix.sml};
  letter-spacing: initial;
`

const Brand = styled.span`
  display: block;
`

export { HeroWrapper, Heading, Prefix, Brand }
