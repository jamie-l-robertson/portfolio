import styled from "styled-components"

const Container = styled.section`
  display: block;
  width: 100%;
  padding: ${props => props.theme.layout.inner.padding.sml} 0;
`

const Inner = styled.div`
  width: 100%;
  max-width: ${props => props.theme.layout.inner.maxWidth};
  margin-right: auto;
  margin-left: auto;
  padding: 0 ${props => props.theme.layout.inner.padding.sml};
`

export { Container, Inner }
