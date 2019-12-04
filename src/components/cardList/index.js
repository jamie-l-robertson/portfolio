import React from "React"
import Card from "../card"
import Heading from "../heading"
import { Container, Inner } from "../../theme"

const CardList = ({ heading, cards }) => {
  return (
    <Container>
      <Inner>
        {heading && (
          <Heading level="2" hasBorder={true}>
            {heading}
          </Heading>
        )}
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
