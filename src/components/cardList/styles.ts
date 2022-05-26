import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { m } from "framer-motion";

const CardsWrapper = styled(m.div)`
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
