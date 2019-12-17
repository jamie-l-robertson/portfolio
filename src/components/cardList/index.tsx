import * as React from "react"
import { useSpring, animated } from "react-spring"
import { useInView } from 'react-intersection-observer'
import { urlContext } from '../../store/url.context';
import Card from "../card"
import Heading from "../heading"
import { Container, Inner } from "../../theme"
import { CardsWrapper } from "./styles"

interface CardListProps {
  heading: string
  cards?: []
  id?: string
}

const CardList: React.FC<CardListProps> = ({ heading, cards = [], id = undefined }) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? `translate3d(0, 0, 0)` : `translate3d(0, 30px, 0)`
  });

  const { setCurrentUrl } = React.useContext(urlContext);

  React.useMemo(() => {
    if (inView) {
      setCurrentUrl(id);
      history.pushState(null, null, `#${id}`);
    }
  }, [inView]);

  return (
    <Container id={id}>
      <Inner>
        <animated.div ref={ref} style={props}>
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
        </animated.div>
      </Inner>
    </Container>
  )
}

export default CardList
