import styled from "styled-components"
import { rem } from "polished"

const Items = styled.ul`
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  display: inline-block;

  + li {
    margin-left: ${rem("15px")};
  }
`

export { Items, Item }
