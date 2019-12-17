
import * as React from "react";
import { useSpring, animated } from "react-spring"
import { useInView } from 'react-intersection-observer'

interface TransitionWrapperProps {
  viewProps: {
    rootMargin: string
  }
  springProps: {
    opacity: any
    transform: any
  }
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = (
  {
    viewProps = {
      rootMargin: '-100px 0px',
    },
    springProps = {
      opacity: inView ? 1 : 0,
      transform: inView ? `translate3d(0, 0, 0)` : `translate3d(0, 30px, 0)`
    },
    children }) => {

  const [ref, inView] = useInView(viewProps);
  const props = useSpring(springProps);

  return (
    <animated.div ref={ref} style={props}>{children}</animated.div>
  );
}

export default TransitionWrapper;