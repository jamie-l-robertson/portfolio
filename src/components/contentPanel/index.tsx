import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { urlContext } from "@stores/url.context";
import { Container, Inner } from "@theme";
import Heading from "@components/heading";
import { inUp } from "@animations";
import { Content } from "./styles";

interface ContentPanelProps {
  content: object
  id: string
};

const ContentPanel: React.FC<ContentPanelProps> = ({ content, id }) => {
  const { title, contentNode } = content[0];

  const [ref, inView, entry] = useInView({
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
    <Container id={id} isInView={inView ? id : null} noTop>
      <Inner>
        <motion.div ref={ref} initial="initial" animate={inView ? `animate` : `initial`} variants={inUp}>
          {title && <Heading level="2" showDot>{title}</Heading>}
          <Content dangerouslySetInnerHTML={{ __html: contentNode.childMarkdownRemark.html }} />
        </motion.div>
      </Inner>
    </Container>
  );
}

export default ContentPanel;