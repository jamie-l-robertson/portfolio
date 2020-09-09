import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { rem } from "polished";


const BackToTopButton = styled.button`
  display: none;
  visibility: hidden;
  opacity: ${props => props.show === true ? 1 : 0};
  transform: ${props => props.show === true ? `translateY(0)` : `translateY(20px)`};
  transition: all 0.2s ${props => props.theme.config.transitions.slide};
  will-change: opacity;

  ${breakpoint('largeDesktop')`
     display: block;
     visibility: visible;
     position: fixed;
     z-index: 10;
     right: 22px;
     bottom: 22px;
     cursor: pointer;
     color: ${props => props.theme.config.color.quaternary};
  `};

  &:hover {
    color: ${props => props.theme.config.color.quinary};

    svg {
      transform: scale(1.1);
      transform-origin: 50% 50%;
    }
  }
  
  svg {
    transition: transform 0.1s ease-in-out;
  }
  
`;

export { BackToTopButton };