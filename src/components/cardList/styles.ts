import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { motion } from "framer-motion";
import { rem } from "polished";

const CardsWrapper = styled(motion.div)`
  display: block;
  position: relative;

  ${breakpoint('tablet')`
     display: grid;
     grid-template-columns: 1fr 1fr;
     row-gap: 30px;
     column-gap: 30px;
  `};
`;

export { CardsWrapper };
