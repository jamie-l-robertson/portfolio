import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { motion } from "framer-motion";
import { rem } from "polished";

const Content = styled(motion.div)`
  display: block;
  max-width: 860px;

  ul, ol {
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 120px));
    overflow: hidden;
    row-gap: 8px;
    column-gap: 30px;

    ${breakpoint('tablet')`
      grid-template-columns: repeat(3, minmax(160px, 200px));
    `};

    li {
      position: relative;
      padding-left: ${rem('15px')};

      &::before {
        display: inline-block;
        position: absolute;
        top: 5px;
        left: 0;
        content: "";
        width: 5px;
        height: 5px;
        background-color: ${props => props.theme.config.color.quaternary};
        vertical-align: middle;
        border-radius: 100%;
      }
    }
  }
`;

export { Content };