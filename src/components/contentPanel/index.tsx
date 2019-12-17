import * as React from "react";
import { useSpring, animated } from "react-spring"
import { useInView } from 'react-intersection-observer'
import { urlContext } from '../../store/url.context';
import { Container, Inner } from '../../theme';
import Heading from '../heading';
import { transitionWrapper } from '../transitionWrapper';
import { Content } from './styles';

const ContentPanel = ({ content, id }) => {
  const { title, contentNode } = content[0];

  const [ref, inView, entry] = useInView({
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
    <Container id={id} isInView={inView ? id : null} noTop>
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