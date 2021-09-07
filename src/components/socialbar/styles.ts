import styled from "styled-components"
import { rem } from "polished";
import { m } from "framer-motion";

const Items = styled(m.ul)`
  margin: ${rem('40px')} 0;
  padding: 0;
`;

const Item = styled(m.li)`
  display: inline-block;

  + li {
    margin-left: ${rem("15px")};
  }
`;

export { Items, Item };
