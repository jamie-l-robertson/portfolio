import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { rem } from "polished";

const BackToTopButton = styled.button`
  display: none;
  visibility: hidden;
  opacity: ${props => props.show === true ? 1 : 0};
  transition: opacity 0.2s ease-in-out;

  ${breakpoint('tablet')`
     display: block;
     visibility: visible;
     position: fixed;
     z-index: 10;
     right: 30px;
     bottom: 25px;
     cursor: pointer;
     color: ${props => props.theme.color.quaternary};
  `};


  &:hover {
    color: ${props => props.theme.color.quinary};

    svg {
      transform: scale(1.1);
      transform-origin: 50% 50%;
    }
  }
  
  svg {
    fill: ${props => props.theme.color.secondary};
    transition: transform 0.1s ease-in-out;
  }
  
`;

export { BackToTopButton };