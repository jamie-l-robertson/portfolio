import * as React from "react";
import { Container, Inner } from "@theme";
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { prefersReducedMotionContext } from "@stores/reduceMotion.context";
import Heading from "@components/heading";
import CustomLink from "@components/link";
import Icon from "@components/icon";
import config from "@shared";
import { inUp } from "@animations";
import { ContentContainer, Content, ContentMeta } from "./styles";

interface ContactPanelProps {
  title: string
  id?: string
  buttonText: string
};

const ContactPanel: React.FC<ContactPanelProps> = ({
  title,
  buttonText = "Send a message",
  id = undefined
}) => {
  const [ref, inView] = useInView({ rootMargin: '-100px 0px' });
  const { reducedMotion } = React.useContext(prefersReducedMotionContext);

  return (
    <Container id={id}>
      <Inner>
        <motion.div ref={ref} initial="initial" animate={inView ? `animate` : `initial`} custom={reducedMotion} variants={inUp}>
          <Heading level="2" showDot>{title}</Heading>
          <ContentContainer>
            <Content dangerouslySetInnerHTML={{ __html: config.contact.intro }} />
            <ContentMeta>
              <CustomLink href={`mailto:${config.contact.email}?subject=Website%20Enquiry`} blockLink external>{buttonText}</CustomLink>
            </ContentMeta>
          </ContentContainer>
        </motion.div>
      </Inner>
    </Container>
  )
};

export default ContactPanel;