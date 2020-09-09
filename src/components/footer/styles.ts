import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';
import { rem } from "polished";

const FooterWrapper = styled.footer`
  display; block;
  position: relative;
  padding: ${rem('30px')} 0;
  background-color: ${props => props.theme.config.color.footer};
  text-align: right;

  a {
    border-bottom: 1px dotted currentColor;
  }

  p {
    font-size: ${rem('14px')};
    margin-bottom: 5px;

    ${breakpoint('tablet')`
      margin-bottom: 0;
    
      &:first-of-type {
        float: left;
      }
    `};

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export { FooterWrapper };