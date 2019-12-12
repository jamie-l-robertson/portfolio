import * as React from "react";
import { useSpring, animated } from "react-spring"
import { useInView } from 'react-intersection-observer'
import { Container, Inner } from '../../theme';
import Heading from '../heading';
import { Content } from './styles';

const ContentPanel = ({ content }) => {
  const { title, contentNode } = content[0];

  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? `translate3d(0, 0, 0)` : `translate3d(0, 30px, 0)`
  });

  return (
    <Container noTop>
      <Inner>
        <animated.div ref={ref} style={props}>
          {title && <Heading level="2" showDot>{title}</Heading>}
          <Content dangerouslySetInnerHTML={{ __html: contentNode.childMarkdownRemark.html }} />
        </animated.div>
      </Inner>
    </Container>
  );
}

export default ContentPanel;