import * as React from "react"
import { Link } from "gatsby"
import { useSpring } from "react-spring"
import { useInView } from 'react-intersection-observer'
import { urlContext } from '../../store/url.context';
import Socialbar from "../socialbar"
import TransitionWrapper from '../transitionWrapper';
import { HeroWrapper, Heading, Prefix, Intro, Brand, Dot } from "./styles"
import { Inner } from "../../theme";

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
}

const Hero: React.FC<HeroProps> = ({ showBrand = true, data, id = undefined }) => {
  const { prefix, title, intro, copyNode, link } = data[0];

  const [ref, inView] = useInView({
    rootMargin: '0px 0px',
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? `translate3d(0, 0, 0)` : `translate3d(0, 20px, 0)`
  });

  const { setCurrentUrl } = React.useContext(urlContext);

  React.useMemo(() => {
    if (inView) {
      setCurrentUrl(id);
      history.pushState(null, null, `#${id}`);
    }
  }, [inView]);

  return (
    <HeroWrapper ref={ref} style={props} id={id}>
      <Inner>
        {showBrand && <Brand />}
        {title && (
          <Heading>
            <Prefix>{prefix}</Prefix>
            {title}<Dot aria-hidden="true">.</Dot>
          </Heading>
        )}
        {copyNode && (
          <Intro
            dangerouslySetInnerHTML={{
              __html: copyNode.childMarkdownRemark.html,
            }}
          />
        )}
        {link && <Link to={link.url}>{link.label}</Link>}
        <Socialbar />
      </Inner>
    </HeroWrapper>
  )
}

export default Hero
