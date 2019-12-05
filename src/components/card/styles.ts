import styled from "styled-components"
import { rem } from "polished"
import { Link } from "gatsby"
import Heading from "../heading"

const CardWrapper = styled.article`
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.08);
  transition: all 0.2s ease-in-out;
`

const CardMeta = styled.header`
  text-align: right;
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0 ${rem("5px")} ${rem("20px")};

  &:last-of-type {
    margin-right: 0;
  }
`

const StyledHeading = styled(Heading)`
  margin-bottom: ${rem("20px")};
`

const TechItem = styled.span`
  font-size: ${rem("16px")};
  color: ${props => props.theme.color.quaternary};
`

export { CardWrapper, CardMeta, StyledLink, StyledHeading, TechItem }
