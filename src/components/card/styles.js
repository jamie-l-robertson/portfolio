import styled from "styled-components"

const CardWrapper = styled.article`
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.08);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`
export { CardWrapper }
