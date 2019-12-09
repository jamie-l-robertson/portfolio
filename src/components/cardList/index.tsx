import * as React from "react"
import Card from "../card"
import Heading from "../heading"
import { Container, Inner } from "../../theme"
import { CardsWrapper } from "./styles"

interface CardListProps {
  heading: string
  cards?: []
}

const CardList: React.FC<CardListProps> = ({ heading, cards = [] }) => {
  return (
    <Container style={{ paddingTop: 0 }}>
      <Inner>
        {heading && (
          <Heading level="2" showDot={true}>
            {heading}
          </Heading>
        )}
        {cards && (
          <CardsWrapper>
            {cards.map((item, i) => (
              <Card key={`card-${i}`} {...item} />
            ))}
          </CardsWrapper>
        )}
      </Inner>
    </Container>
  )
}

export default CardList
