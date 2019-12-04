import styled from "styled-components"
import { rem } from "polished"
import Icon from "../icon"

const CardWrapper = styled.article`
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.08);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`

const StyledIcon = styled(Icon)`
  margin-bottom: ${rem("20px")};
`
export { CardWrapper, StyledIcon }
