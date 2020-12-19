import * as React from "react";
import { Link } from "gatsby";
import { useInView } from "react-intersection-observer";
import { urlContext } from '@stores/url.context';
import { prefersReducedMotionContext } from "@stores/reduceMotion.context";
import SocialBar from "@components/socialbar";
import ScrollHint from "@components/scrollHint";
import { Inner } from "@theme";
import { chained, inUp, inDown } from "@animations";
import { HeroWrapper, HeroHeading, Prefix, Intro, Brand, Dot } from "./styles"
import { motion } from "framer-motion";

interface HeroProps {
  showBrand?: boolean
  id?: string
  data: [
    {
      prefix: string
      title: string
      intro: string
      copyNode: {
        childMarkdownRemark: {
          html: string
        }
      }
      link: {
        url: string
        label: string
      }
    }
  ]
};

const Hero: React.FC<HeroProps> = ({
  showBrand = true,
  data,
  id = undefined
}) => {
  const { prefix, title, intro, copyNode, link } = data[0];
  const [ref, inView] = useInView({ rootMargin: '0px 0px' });
  const { setCurrentUrl } = React.useContext(urlContext);
  const { reducedMotion } = React.useContext(prefersReducedMotionContext);

  React.useEffect(() => {
    if (inView) {
      setCurrentUrl(id);
      history.pushState(null, null, `#${id}`);
    }
  }, [inView]);

  return (
    <HeroWrapper ref={ref} id={id} initial="initial" animate={inView ? `animate` : `initial`} custom={reducedMotion} variants={inUp}>
      <Inner>
        {showBrand && <Brand />}
        <motion.div variants={chained}>
          {title && (
            <motion.div custom={reducedMotion} variants={inUp}>
              <HeroHeading level="1" showDot={true}>
                <Prefix>{prefix}</Prefix>
                {title}
              </HeroHeading>
            </motion.div>
          )}
          {copyNode && (
            <Intro
              dangerouslySetInnerHTML={{
                __html: copyNode.childMarkdownRemark.html,
              }}
              custom={reducedMotion}
              variants={inUp}
            />
          )}
          {link && <Link to={link.url}>{link.label}</Link>}
        </motion.div>
        <SocialBar />
        <ScrollHint />
      </Inner>
    </HeroWrapper>
  )
};

export default Hero;
