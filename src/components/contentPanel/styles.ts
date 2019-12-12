import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { rem } from "polished";

const Content = styled.div`
  display: block;
  max-width: 760px;

  ul, ol {
    display: block;

    ${breakpoint('tablet')`
      display: grid;
      grid-template-columns: repeat(3, minmax(160px, 200px));
      overflow: hidden;
      row-gap: 8px;
      column-gap: 30px;
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
        background-color: ${props => props.theme.color.quaternary};
        vertical-align: middle;
        border-radius: 100%;
      }
    }
  }
`;

export { Content };