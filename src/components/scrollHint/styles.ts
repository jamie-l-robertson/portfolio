import styled, { keyframes } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { motion } from "framer-motion";
import { rem } from "polished";

const fadeDown = keyframes`
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, 10px);
    opacity: 0;

  }
`;

const ScrollContainer = styled.div`
  display: none;
  visibility: hidden;

  ${breakpoint('tablet')`
    display: block;
    visibility: visible;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    opacity: ${props => props.hide === true ? 0 : 1};
    transition: opacity 0.3s ease-in-out;
  `};

  ${breakpoint('desktop')`
      bottom: 70px;
  `};

`;

const ScrollIcon = styled(motion.span)`
display: block;
position: relative;
width: 22px;
height: 34px;
border: 1px solid white;
border-radius: 12px;
`;

const Wheel = styled.span`
display: block;
position: absolute;
width: 3px;
height: 3px;
background-color: ${ props => props.theme.color.quaternary};
border-radius: 100%;
top: 10px;
left: 50%;
transform: translateX(-50%);
animation: ${ fadeDown} 1.5s ease-out infinite;
`;

export { ScrollContainer, ScrollIcon, Wheel };