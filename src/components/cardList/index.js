import React from "React"
import Card from "../card"
import { Container, Inner } from "../../theme"

const CardList = ({ heading, cards }) => {
  return (
    <Container>
      <Inner>
        {heading && <h2>{heading}</h2>}
        {cards.map(item => (
          <Card {...item} />
        ))}
      </Inner>
    </Container>
  )
}

export default CardList

CardList.defaultProps = {
  cards: [],
}
