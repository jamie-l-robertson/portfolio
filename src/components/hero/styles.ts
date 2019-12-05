import styled from "styled-components"
import { Container } from "../../theme"

const HeroWrapper = styled(Container)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Heading = styled.h1`
    display: block;
    font-size: 60px;
    /* font-size: ${props => props.theme.font.heading.sml}; */

`

const Prefix = styled.span`
  display: block;
  margin-bottom: 10px;
  color: ${props => props.theme.color.quaternary};
  font-size: ${props => props.theme.font.prefix.sml};
  letter-spacing: initial;
`

export { HeroWrapper, Heading, Prefix }
