import * as React from "React"
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
    <Container>
      <Inner>
        {heading && (
          <Heading level="2" border={true}>
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
