import styled from "styled-components"
import { rem } from "polished";
import { animated } from "react-spring";

const Items = styled.ul`
  margin: ${rem('40px')} 0;
  padding: 0;
`;

const Item = styled(animated.li)`
  display: inline-block;

  + li {
    margin-left: ${rem("15px")};
  }
`;

export { Items, Item };
