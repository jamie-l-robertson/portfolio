import * as React from 'react';
import { Container, Inner } from "../../theme"
import { useSpring, animated } from "react-spring"
import { useInView } from 'react-intersection-observer'
import Heading from '../heading';
import CustomLink from '../link';
import TransitionWrapper from '../transitionWrapper';
import Icon from '../icon';
import { ContentContainer, Content, ContentMeta } from './styles';
import config from '../../config';


interface ContactPanelProps {
  title: string
  buttonText: string
}

const ContactPanel: React.FC<ContactPanelProps> = ({ title, buttonText = "Send a message" }) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? `translate3d(0, 0, 0)` : `translate3d(0, 30px, 0)`
  });

  return (
    <Container>
      <Inner>
        <animated.div ref={ref} style={props}>
          <Heading level="2" showDot>{title}</Heading>
          <ContentContainer>
            <Content dangerouslySetInnerHTML={{ __html: config.contact.intro }} />
            <ContentMeta>
              <CustomLink href={`mailto:${config.contact.email}?subject=Website%20Enquiry`} blockLink external>{buttonText}</CustomLink>
            </ContentMeta>
          </ContentContainer>
        </animated.div>
      </Inner>
    </Container>
  )
}

export default ContactPanel;