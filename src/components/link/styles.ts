import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { rem, rgba } from "polished";

const StyledLink = styled.a`
  ${props => props.blockLink && `display: inline-block;`};
  margin: 0 0 ${rem('20px')};
  padding: ${rem('15px')} ${rem('20px')};
  font-family: ${props => props.theme.font.label};
  font-weight: 700;
  font-size: ${rem('18px')};
  color: ${props => props.theme.color.text};
  border: 2px solid ${props => props.theme.color.quaternary};
  border-radius: 5px;

  &:hover, 
  &:focus {
    cursor: pointer;
    color: ${props => props.theme.color.secondary};
    background-color: ${props => rgba(props.theme.color.quaternary, 1)};
  }

  svg {
    margin-left: ${rem('10px')};
  }
`
  ;

export default StyledLink;