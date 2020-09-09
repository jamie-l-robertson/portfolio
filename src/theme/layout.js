import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Container = styled.section`
  display: block;
  width: 100%;
  padding: ${props => props.theme.config.layout.inner.padding.sml} 0;
  ${props => props.backgroundColor && `background-color: ${props.config.backgroundColor}`};

  ${breakpoint('tablet')`
    padding: ${props => props.theme.config.layout.inner.padding.md} 0;
  `};

  ${breakpoint('desktop')`
    padding: ${props => props.theme.config.layout.inner.padding.lrg} 0;
  `};
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${props => props.theme.config.layout.inner.maxWidth};
  margin-right: auto;
  margin-left: auto;
  padding: 0 ${props => props.theme.config.layout.inner.padding.sml};
`;

export { Container, Inner };
