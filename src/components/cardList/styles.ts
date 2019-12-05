import styled from "styled-components"

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 15px;
  column-gap: 15px;
  position: relative;
`

export { CardsWrapper }
