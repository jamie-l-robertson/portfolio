import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { motion } from "framer-motion";
import { rem } from "polished";

const ContentContainer = styled(motion.div)`
  display: block;

  ${breakpoint('tablet')`
    display: grid;
    grid-template-columns: 2fr 1fr;
    row-gap: 30px;
    column-gap: 30px;
  `};
`;

const Content = styled.div`
  display: block;
  margin-bottom: ${rem('40px')};

  ${breakpoint('tablet')`
    margin-bottom: 0;
  `};
`;

const ContentMeta = styled(motion.div)`
  ${breakpoint('tablet')`
    text-align: center;
  `};
`;

export { ContentContainer, Content, ContentMeta };
