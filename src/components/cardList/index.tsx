import * as React from "react";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { urlContext } from "@stores/url.context";
import Card from "@components/card";
import Heading from "@components/heading";
import { Container, Inner } from "@theme";
import { inUp } from '@animations';
import { CardsWrapper } from "./styles";

interface CardListProps {
  heading: string
  cards?: []
  id?: string
};

const CardList: React.FC<CardListProps> = ({ heading, cards = [], id = undefined }) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });

  const { setCurrentUrl } = React.useContext(urlContext);

  React.useMemo(() => {
    if (inView) {
      setCurrentUrl(id);
      history.pushState(null, null, `#${id}`);
    }
  }, [inView]);

  return (
    <>
      {
        cards.length > 0 && (
          <Container id={id}>
            <Inner>
              <motion.div ref={ref} initial='hidden' animate={inView ? `visible` : `hidden`} variants={inUp}>
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
              </motion.div>
            </Inner>
          </Container>
        )
      }
    </>
  )
};

export default CardList;